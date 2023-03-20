using System.Globalization;
using Markdig;
using Markdig.Syntax;
using ServiceStack.IO;
using ServiceStack.Logging;

namespace MyApp;

public class MarkdownPages : MarkdownPagesBase
{
    public MarkdownPages(ILogger<MarkdownPages> log) : base(log){}
    public List<MarkdownFileInfo> Pages { get; set; } = new();
    
    public MarkdownFileInfo? GetBySlug(string slug) => Fresh(Pages.FirstOrDefault(x => x.Slug == slug));

    public void LoadFrom(string fromDirectory)
    {
        Pages.Clear();
        var fs = AssertVirtualFiles();
        var files = fs.GetDirectory(fromDirectory).GetAllFiles().ToList();
        var log = LogManager.GetLogger(GetType());
        log.InfoFormat("Found {0} pages", files.Count);

        var pipeline = CreatePipeline();

        foreach (var file in files)
        {
            try
            {
                var doc = Load(file.VirtualPath, pipeline);
                if (doc == null)
                    continue;

                Pages.Add(doc);
            }
            catch (Exception e)
            {
                log.Error(e, "Couldn't load {0}: {1}", file.VirtualPath, e.Message);
            }
        }
    }
}

public class WhatsNew : MarkdownPagesBase
{
    public WhatsNew(ILogger<WhatsNew> log) : base(log){}
    public Dictionary<string, List<MarkdownFileInfo>> Features { get; set; } = new();

    public List<MarkdownFileInfo> GetFeatures(string release)
    {
        return Features.TryGetValue(release, out var doc)
            ? Fresh(doc)
            : new List<MarkdownFileInfo>();
    }
    
    public void LoadFrom(string fromDirectory)
    {
        Features.Clear();
        var fs = AssertVirtualFiles();
        var dirs = fs.GetDirectory(fromDirectory).GetDirectories().ToList();
        log.LogInformation("Found {0} whatsnew directories", dirs.Count);

        var pipeline = CreatePipeline();

        foreach (var dir in dirs)
        {
            var datePart = dir.Name.LeftPart('_');
            if (!DateTime.TryParseExact(datePart, "yyyy-MM-dd", CultureInfo.InvariantCulture,
                    DateTimeStyles.AdjustToUniversal, out var date))
            {
                log.LogWarning("Could not parse date '{0}', ignoring...", datePart);
                continue;
            }

            var releaseVersion = dir.Name.RightPart('_');
            var releaseDate = date;

            foreach (var file in dir.GetFiles().OrderBy(x => x.Name))
            {
                try
                {
                    var doc = Load(file.VirtualPath, pipeline);
                    if (doc == null)
                        continue;
                    
                    doc.Date = releaseDate;

                    var releaseFeatures = Features.GetOrAdd(releaseVersion, v => new List<MarkdownFileInfo>());
                    releaseFeatures.Add(doc);
                }
                catch (Exception e)
                {
                    log.LogError(e, "Couldn't load {0}: {1}", file.VirtualPath, e.Message);
                }
            }
        }
    }
}

public class Blog : MarkdownPagesBase
{
    public Blog(ILogger<Blog> log) : base(log){}
    public List<MarkdownFileInfo> Posts { get; set; } = new();

    public string FallbackProfileUrl { get; set; } = Svg.ToDataUri(Svg.Create(Svg.Body.User, stroke:"none").Replace("fill='currentColor'","fill='#0891b2'"));
    public string FallbackSplashUrl { get; set; } = "https://source.unsplash.com/random/2000x1000/?stationary";

    public Dictionary<string, string> AuthorProfileUrls { get; set; } = new()
    {
        ["Lucy Bates"] = "/img/authors/author1.svg",
        ["Gayle Smith"] = "/img/authors/author2.svg",
        ["Brandon Foley"] = "/img/authors/author3.svg",
    };

    public Dictionary<string, string> AuthorSlugMap { get; } = new();
    public Dictionary<string, string> TagSlugMap { get; } = new();

    public void GenerateSlugs()
    {
        AuthorSlugMap.Clear();
        TagSlugMap.Clear();
        
        foreach (var author in AuthorProfileUrls.Keys)
        {
            AuthorSlugMap[author.GenerateSlug()] = author;
        }
        foreach (var post in Posts)
        {
            if (post.Author != null && !AuthorProfileUrls.ContainsKey(post.Author))
            {
                AuthorSlugMap[post.Author.GenerateSlug()] = post.Author;
            }
            foreach (var tag in post.Tags.Safe())
            {
                TagSlugMap[tag.GenerateSlug()] = tag;
            }
        }
    }
    
    public string GetAuthorProfileUrl(string? name) => name != null && AuthorProfileUrls.TryGetValue(name, out var url)
        ? url
        : FallbackProfileUrl;

    public List<MarkdownFileInfo> GetPosts(string? author = null, string? tag = null, int? year = null)
    {
        IEnumerable<MarkdownFileInfo> latestPosts = Posts
            .Where(x => x.Date < DateTime.UtcNow);
        if (author != null)
            latestPosts = latestPosts.Where(x => x.Author == author);
        if (tag != null)
            latestPosts = latestPosts.Where(x => x.Tags.Contains(tag));
        if (year != null)
            latestPosts = latestPosts.Where(x => x.Date.Value.Year == year);
        return latestPosts.OrderByDescending(x => x.Date).ToList();
    }

    public string GetPostLink(MarkdownFileInfo post) => $"/posts/{post.Slug}";

    public string GetPostsLink() => "/posts";
    public string GetAuthorLink(string author) => $"/posts/author/{author.GenerateSlug()}";
    public string GetYearLink(int year) => $"/posts/year/{year}";
    public string GetTagLink(string tag) => $"/posts/tagged/{tag.GenerateSlug()}";
    public string GetDateLabel(DateTime? date) => X.Map(date ?? DateTime.UtcNow, d => d.ToString("MMMM d, yyyy"))!;
    public string GetDateTimestamp(DateTime? date) => X.Map(date ?? DateTime.UtcNow, d => d.ToString("O"))!;

    public string? GetAuthorBySlug(string? slug)
    {
        return AuthorSlugMap.TryGetValue(slug, out var author)
            ? author
            : null;
    }

    public string? GetTagBySlug(string? slug)
    {
        return TagSlugMap.TryGetValue(slug, out var tag)
            ? tag
            : null;
    }

    public string GetSplashImage(MarkdownFileInfo post)
    {
        var splash = post.Image ?? FallbackSplashUrl;
        return splash.StartsWith("https://images.unsplash.com")
            ? splash.LeftPart('?') + "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            : splash;
    }

    public int WordsPerMin { get; set; } = 225;
    public char[] WordBoundaries { get; set; } = { ' ', '.', '?', '!', '(', ')', '[', ']' };
    public int WordCount(string str) => str.Split(WordBoundaries, StringSplitOptions.RemoveEmptyEntries).Length;
    public int LineCount(string str) => str.CountOccurrencesOf('\n');
    public int MinutesRead(int? words) => (int)Math.Ceiling((words ?? 1) / (double)WordsPerMin);
    public MarkdownFileInfo? FindPostBySlug(string name) => Posts.FirstOrDefault(x => x.Slug == name);

    public override MarkdownFileInfo? Load(string path, MarkdownPipeline? pipeline = null)
    {
        var file = VirtualFiles.GetFile(path)
                   ?? throw new FileNotFoundException(path.LastRightPart('/'));
        var content = file.ReadAllText();

        var writer = new StringWriter();
        var doc = CreateMarkdownFile(content, writer, pipeline);
        if (doc?.Title == null)
        {
            log.LogWarning("No frontmatter found for {0}, ignoring...", file.VirtualPath);
            return null;
        }

        doc.Path = file.VirtualPath;
        doc.Slug = file.Name.RightPart('_').LastLeftPart('.');
        doc.FileName = file.Name;
        doc.HtmlFileName = $"{file.Name.RightPart('_').LastLeftPart('.')}.html";
        var datePart = file.Name.LeftPart('_');
        if (!DateTime.TryParseExact(datePart, "yyyy-MM-dd", CultureInfo.InvariantCulture,
                DateTimeStyles.AdjustToUniversal, out var date))
        {
            log.LogWarning("Could not parse date '{0}', ignoring...", datePart);
            return null;
        }

        doc.Date = date;
        doc.Content = content;
        doc.WordCount = WordCount(content);
        doc.LineCount = LineCount(content);
        writer.Flush();
        doc.Preview = writer.ToString();

        return doc;
    }

    public void LoadFrom(string fromDirectory)
    {
        Posts.Clear();
        var fs = AssertVirtualFiles();
        var files = fs.GetDirectory(fromDirectory).GetAllFiles().ToList();
        var log = LogManager.GetLogger(GetType());
        log.InfoFormat("Found {0} posts", files.Count);

        var pipeline = CreatePipeline();

        foreach (var file in files)
        {
            try
            {
                var doc = Load(file.VirtualPath, pipeline);
                if (doc == null)
                    continue;

                Posts.Add(doc);
            }
            catch (Exception e)
            {
                log.Error(e, "Couldn't load {0}: {1}", file.VirtualPath, e.Message);
            }
        }

        GenerateSlugs();
    }
}

public class MarkdownFileInfo
{
    public string Path { get; set; } = default!;
    public string? Slug { get; set; }
    public string? Layout { get; set; }
    public string? FileName { get; set; }
    public string? HtmlFileName { get; set; }
    public string? Title { get; set; }
    public string? Summary { get; set; }
    public string? Image { get; set; }
    public string? Author { get; set; }
    public List<string> Tags { get; set; } = new();
    public DateTime? Date { get; set; }
    public string? Content { get; set; }
    public string? Url { get; set; }
    public string? Preview { get; set; }
    public string? HtmlPage { get; set; }
    public int? WordCount { get; set; }
    public int? LineCount { get; set; }
}

public abstract class MarkdownPagesBase
{
    protected readonly ILogger log;
    public MarkdownPagesBase(ILogger log) => this.log = log;
    public IVirtualFiles VirtualFiles { get; set; } = default!;
    
    public virtual MarkdownPipeline CreatePipeline()
    {
        var pipeline = new MarkdownPipelineBuilder()
            .UseYamlFrontMatter()
            .UseAdvancedExtensions()
            .Build();
        return pipeline;
    }

    public virtual List<MarkdownFileInfo> Fresh(List<MarkdownFileInfo> docs)
    {
        if (docs.IsEmpty())
            return docs;
        foreach (var doc in docs)
        {
            Fresh(doc);
        }
        return docs;
    }
    
    public virtual MarkdownFileInfo? Fresh(MarkdownFileInfo? doc)
    {
        // Ignore reloading source .md if run in production or as AppTask
        if (doc == null || !HostContext.DebugMode || AppTasks.IsRunAsAppTask())
            return doc;
        var newDoc = Load(doc.Path);
        if (newDoc != null)
        {
            doc.Layout = newDoc.Layout;
            doc.Title = newDoc.Title;
            doc.Summary = newDoc.Summary;
            doc.Image = newDoc.Image;
            doc.Author = newDoc.Author;
            doc.Tags = newDoc.Tags;
            doc.Content = newDoc.Content;
            doc.Url = newDoc.Url;
            doc.Preview = newDoc.Preview;
            doc.HtmlPage = newDoc.HtmlPage;
            doc.WordCount = newDoc.WordCount;
            doc.LineCount = newDoc.LineCount;
        }
        return doc;
    }

    public virtual MarkdownFileInfo? CreateMarkdownFile(string content, TextWriter writer, MarkdownPipeline? pipeline = null)
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
            .ConvertTo<MarkdownFileInfo>();

        return doc;
    }

    public virtual MarkdownFileInfo? Load(string path, MarkdownPipeline? pipeline = null)
    {
        var file = VirtualFiles.GetFile(path)
            ?? throw new FileNotFoundException(path.LastRightPart('/'));
        var content = file.ReadAllText();

        var writer = new StringWriter();

        var doc = CreateMarkdownFile(content, writer, pipeline);
        if (doc?.Title == null)
        {
            log.LogWarning("No frontmatter found for {0}, ignoring...", file.VirtualPath);
            return null;
        }

        doc.Path = file.VirtualPath;
        doc.FileName = file.Name;
        doc.Slug = doc.FileName.WithoutExtension().GenerateSlug();
        doc.Content = content;
        writer.Flush();
        doc.Preview = writer.ToString();

        return doc;
    }

    protected IVirtualFiles AssertVirtualFiles() => 
        VirtualFiles ?? throw new NullReferenceException($"{nameof(VirtualFiles)} is not populated");
}
