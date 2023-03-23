// run node postinstall.js to update to latest version
using Markdig;
using Markdig.Syntax;
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

        if (newDoc.Date != null)
            Date = newDoc.Date;
    }
}

public interface IMarkdownPages
{
    IVirtualFiles VirtualFiles { get; set; }
}
public abstract class MarkdownPagesBase<T> : IMarkdownPages where T : MarkdownFileBase
{
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
            doc.Content = content;
        
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
}