// run node postinstall.js to update to latest version
using Markdig;
using Markdig.Parsers;
using Markdig.Renderers;
using Markdig.Renderers.Html;
using Markdig.Syntax;
using Markdig.Syntax.Inlines;
using ServiceStack.IO;

namespace Ssg;

public class MarkdownFileBase
{
    public string Path { get; set; } = default!;
    public string? Slug { get; set; }
    public string? Layout { get; set; }
    public string? FileName { get; set; }
    public string? HtmlFileName { get; set; }
    /// <summary>
    /// Whether to hide this document in Production
    /// </summary>
    public bool Draft { get; set; }
    public string? Title { get; set; }
    public string? Summary { get; set; }
    public string? Image { get; set; }
    public string? Author { get; set; }
    public List<string> Tags { get; set; } = new();
    /// <summary>
    /// Date document is published. Documents with future Dates are only shown in Development 
    /// </summary>
    public DateTime? Date { get; set; }
    public string? Content { get; set; }
    public string? Url { get; set; }
    /// <summary>
    /// The rendered HTML of the Markdown
    /// </summary>
    public string? Preview { get; set; }
    public string? HtmlPage { get; set; }
    public int? WordCount { get; set; }
    public int? LineCount { get; set; }
    public string? Group { get; set; }
    public int? Order { get; set; }
    public DocumentMap? DocumentMap { get; set; }

    /// <summary>
    /// Update Markdown File to latest version
    /// </summary>
    /// <param name="newDoc"></param>
    public virtual void Update(MarkdownFileBase newDoc)
    {
        Layout = newDoc.Layout;
        Title = newDoc.Title;
        Summary = newDoc.Summary;
        Draft = newDoc.Draft;
        Image = newDoc.Image;
        Author = newDoc.Author;
        Tags = newDoc.Tags;
        Content = newDoc.Content;
        Url = newDoc.Url;
        Preview = newDoc.Preview;
        HtmlPage = newDoc.HtmlPage;
        WordCount = newDoc.WordCount;
        LineCount = newDoc.LineCount;
        Group = newDoc.Group;
        Order = newDoc.Order;
        DocumentMap = newDoc.DocumentMap;

        if (newDoc.Date != null)
            Date = newDoc.Date;
    }
}

public interface IMarkdownPages
{
    string Id { get; }
    IVirtualFiles VirtualFiles { get; set; }
    List<MarkdownFileBase> GetAll();
}
public abstract class MarkdownPagesBase<T> : IMarkdownPages where T : MarkdownFileBase
{
    public abstract string Id { get; }
    protected ILogger Log { get; }
    protected IWebHostEnvironment Environment { get; }

    public MarkdownPagesBase(ILogger log, IWebHostEnvironment env)
    {
        this.Log = log;
        this.Environment = env;
    }
    
    public IVirtualFiles VirtualFiles { get; set; } = default!;
    
    public virtual MarkdownPipeline CreatePipeline()
    {
        var pipeline = new MarkdownPipelineBuilder()
            .UseYamlFrontMatter()
            .UseAdvancedExtensions()
            .UseAutoLinkHeadings()
            .UseHeadingsMap()
            .Build();
        return pipeline;
    }

    public virtual List<T> Fresh(List<T> docs)
    {
        if (docs.IsEmpty())
            return docs;
        foreach (var doc in docs)
        {
            Fresh(doc);
        }
        return docs;
    }
    
    public virtual T? Fresh(T? doc)
    {
        // Ignore reloading source .md if run in production or as AppTask
        if (doc == null || !Environment.IsDevelopment() || AppTasks.IsRunAsAppTask())
            return doc;
        var newDoc = Load(doc.Path);
        doc.Update(newDoc);
        return doc;
    }

    public virtual T? CreateMarkdownFile(string content, TextWriter writer, MarkdownPipeline? pipeline = null)
    {
        pipeline ??= CreatePipeline();
        
        var renderer = new Markdig.Renderers.HtmlRenderer(writer);
        pipeline.Setup(renderer);

        var document = Markdown.Parse(content, pipeline);
        renderer.Render(document);

        var block = document
            .Descendants<Markdig.Extensions.Yaml.YamlFrontMatterBlock>()
            .FirstOrDefault();

        var doc = block?
            .Lines // StringLineGroup[]
            .Lines // StringLine[]
            .Select(x => $"{x}\n")
            .ToList()
            .Select(x => x.Replace("---", string.Empty))
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Select(x => KeyValuePairs.Create(x.LeftPart(':').Trim(), x.RightPart(':').Trim()))
            .ToObjectDictionary()
            .ConvertTo<T>();

        if (doc != null)
        {
            doc.Content = content;
            doc.DocumentMap = document.GetData(nameof(DocumentMap)) as DocumentMap;
        }

        return doc;
    }

    public virtual T? Load(string path, MarkdownPipeline? pipeline = null)
    {
        var file = VirtualFiles.GetFile(path)
                   ?? throw new FileNotFoundException(path.LastRightPart('/'));
        var content = file.ReadAllText();

        var writer = new StringWriter();

        var doc = CreateMarkdownFile(content, writer, pipeline);
        if (doc?.Title == null)
        {
            Log.LogWarning("No frontmatter found for {0}, ignoring...", file.VirtualPath);
            return null;
        }

        doc.Path = file.VirtualPath;
        doc.FileName = file.Name;
        doc.Slug = doc.FileName.WithoutExtension().GenerateSlug();
        doc.Content = content;
        doc.WordCount = WordCount(content);
        doc.LineCount = LineCount(content);
        writer.Flush();
        doc.Preview = writer.ToString();
        doc.Date ??= file.LastModified;

        return doc;
    }

    public virtual bool IsVisible(T doc) => Environment.IsDevelopment() || 
        !doc.Draft && (doc.Date == null || doc.Date.Value <= DateTime.UtcNow);
    
    public int WordsPerMin { get; set; } = 225;
    public char[] WordBoundaries { get; set; } = { ' ', '.', '?', '!', '(', ')', '[', ']' };
    public virtual int WordCount(string str) => str.Split(WordBoundaries, StringSplitOptions.RemoveEmptyEntries).Length;
    public virtual int LineCount(string str) => str.CountOccurrencesOf('\n');
    public virtual int MinutesToRead(int? words) => (int)Math.Ceiling((words ?? 1) / (double)WordsPerMin);
    
    protected IVirtualFiles AssertVirtualFiles() => 
        VirtualFiles ?? throw new NullReferenceException($"{nameof(VirtualFiles)} is not populated");

    public virtual List<MarkdownFileBase> GetAll() => new();

    public virtual string? StripFrontmatter(string? content)
    {
        if (content == null)
            return null;
        var startPos = content.IndexOf("---", StringComparison.CurrentCulture);
        if (startPos == -1)
            return content;
        var endPos = content.IndexOf("---", startPos + 3, StringComparison.Ordinal);
        if (endPos == -1)
            return content;
        return content.Substring(endPos + 3).Trim();
    }

    public virtual MarkdownFileBase ToMetaDoc(T x, Action<MarkdownFileBase>? fn = null)
    {
        var to = new MarkdownFileBase
        {
            Slug = x.Slug,
            Title = x.Title,
            Summary = x.Summary,
            Date = x.Date,
            Tags = x.Tags,
            Author = x.Author,
            Image = x.Image,
            WordCount = x.WordCount,
            LineCount = x.LineCount,
            Url = x.Url,
            Group = x.Group,
            Order = x.Order,
        };
        fn?.Invoke(to);
        return to;
    }
}

public struct HeadingInfo
{
    public int Level { get; }
    public string Id { get; }
    public string Content { get; }

    public HeadingInfo(int level, string id, string content)
    {
        Level = level;
        Id = id;
        Content = content;
    }
}

/// <summary>
/// An HTML renderer for a <see cref="HeadingBlock"/>.
/// </summary>
/// <seealso cref="HtmlObjectRenderer{TObject}" />
public class AutoLinkHeadingRenderer : HtmlObjectRenderer<HeadingBlock>
{
    private static readonly string[] HeadingTexts = {
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
    };
    public event Action<HeadingBlock>? OnHeading;

    protected override void Write(HtmlRenderer renderer, HeadingBlock obj)
    {
        int index = obj.Level - 1;
        string[] headings = HeadingTexts;
        string headingText = ((uint)index < (uint)headings.Length)
            ? headings[index]
            : $"h{obj.Level}";

        if (renderer.EnableHtmlForBlock)
        {
            renderer.Write('<');
            renderer.Write(headingText);
            renderer.WriteAttributes(obj);
            renderer.Write('>');
        }

        renderer.WriteLeafInline(obj);

        var attrs = obj.TryGetAttributes();
        if (attrs?.Id != null && obj.Level <= 4)
        {
            renderer.Write("<a class=\"header-anchor\" href=\"javascript:;\" onclick=\"location.hash='#");
            renderer.Write(attrs.Id);
            renderer.Write("'\" aria-label=\"Permalink\">&ZeroWidthSpace;</a>");
        }

        if (renderer.EnableHtmlForBlock)
        {
            renderer.Write("</");
            renderer.Write(headingText);
            renderer.WriteLine('>');
        }

        renderer.EnsureLine();

        OnHeading?.Invoke(obj);
    }
}
public class AutoLinkHeadingsExtension : IMarkdownExtension
{
    public void Setup(MarkdownPipelineBuilder pipeline)
    {
    }

    public void Setup(MarkdownPipeline pipeline, IMarkdownRenderer renderer)
    {
        renderer.ObjectRenderers.Replace<HeadingRenderer>(new AutoLinkHeadingRenderer());
    }
}

public class HeadingsMapExtension : IMarkdownExtension
{
    public void Setup(MarkdownPipelineBuilder pipeline)
    {
        var headingBlockParser = pipeline.BlockParsers.Find<HeadingBlockParser>();
        if (headingBlockParser != null)
        {
            // Install a hook on the HeadingBlockParser when a HeadingBlock is actually processed
            // headingBlockParser.Closed -= HeadingBlockParser_Closed;
            // headingBlockParser.Closed += HeadingBlockParser_Closed;
        }
    }

    public void Setup(MarkdownPipeline pipeline, IMarkdownRenderer renderer)
    {
        if (renderer.ObjectRenderers.TryFind<AutoLinkHeadingRenderer>(out var customHeader))
        {
            customHeader.OnHeading += OnHeading;
        }
    }

    private void OnHeading(HeadingBlock headingBlock)
    {
        if (headingBlock.Parent is not MarkdownDocument document)
            return;
        
        if (document.GetData(nameof(DocumentMap)) is not DocumentMap docMap)
        {
            docMap = new();
            document.SetData(nameof(DocumentMap), docMap);
        }

        var text = headingBlock.Inline?.FirstChild is LiteralInline literalInline
            ? literalInline.ToString()
            : null;
        var attrs = headingBlock.TryGetAttributes();
            
        if (!string.IsNullOrEmpty(text) && attrs?.Id != null)
        {
            if (headingBlock.Level == 2)
            {
                docMap.Headings.Add(new MarkdownMenu {
                    Text = text,
                    Link = $"#{attrs.Id}",
                });
            }
            else if (headingBlock.Level == 3)
            {
                var lastHeading = docMap.Headings.LastOrDefault();
                if (lastHeading != null)
                {
                    lastHeading.Children ??= new();
                    lastHeading.Children.Add(new MarkdownMenuItem {
                        Text = text,
                        Link = $"#{attrs.Id}",
                    });
                }
            }
        }
    }
}

public static class MarkdigExtensions
{
    /// <summary>
    /// Uses the auto-identifier extension.
    /// </summary>
    public static MarkdownPipelineBuilder UseAutoLinkHeadings(this MarkdownPipelineBuilder pipeline)
    {
        pipeline.Extensions.AddIfNotAlready(new AutoLinkHeadingsExtension());
        return pipeline;
    }
    
    public static MarkdownPipelineBuilder UseHeadingsMap(this MarkdownPipelineBuilder pipeline)
    {
        pipeline.Extensions.AddIfNotAlready(new HeadingsMapExtension());
        return pipeline;
    }
}

public class DocumentMap
{
    public List<MarkdownMenu> Headings { get; } = new();
}

public class MarkdownMenu
{
    public string? Icon { get; set; }
    public string? Text { get; set; }
    public string? Link { get; set; }
    public List<MarkdownMenuItem>? Children { get; set; }
}
public class MarkdownMenuItem
{
    public string Text { get; set; } 
    public string Link { get; set; } 
}