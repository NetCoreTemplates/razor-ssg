// run node postinstall.js to update to latest version
using System.Globalization;
using Markdig;
using ServiceStack.IO;

namespace MyApp;

public class PodcastConfig
{
    public string LocalBaseUrl { get; set; }
    public string PublicBaseUrl { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string About { get; set; }
    public string? ImageUrl { get; set; }
    public string? ImageTitle { get; set; }
    public string? ImageLink { get; set; }
    public string? Email { get; set; }
    public string? CopyrightOwner { get; set; }
    public string? Category { get; set; }
    public ItunesPodcast? Itunes { get; set; }
    public List<PodcastIconLink> ListenLinks { get; set; } = [];
    public string? GetAbsoluteImageUrl() => ImageUrl == null ? null : ImageUrl.StartsWith("http")
        ? ImageUrl
        : PublicBaseUrl.CombineWith(ImageUrl);

    public string? ItunesImageUrl => Itunes?.ImageUrl ?? ImageUrl;
    public string? GetAbsoluteItunesImageUrl() => ItunesImageUrl == null ? null : ItunesImageUrl.StartsWith("http")
        ? ItunesImageUrl
        : PublicBaseUrl.CombineWith(ItunesImageUrl);
}
public class PodcastIconLink
{
    public string Label { get; set; }
    public string Href { get; set; }
    public string Svg { get; set; }
}

public class ItunesPodcast
{
    public string? Author { get; set; }
    public string? OwnerName { get; set; }
    public string? OwnerEmail { get; set; }
    public string? Subtitle { get; set; }
    public string? Summary { get; set; }
    public bool? Explicit { get; set; }
    public string? ImageUrl { get; set; }
    public string? Type { get; set; }
    public List<string>? Categories { get; set; }
}


public class MarkdownPodcasts(ILogger<MarkdownBlog> log, IWebHostEnvironment env, IVirtualFiles fs)
    : MarkdownPagesBase<MarkdownFileInfo>(log, env, fs)
{
    public override string Id => "podcasts";
    List<MarkdownFileInfo> Episodes { get; set; } = [];

    public List<MarkdownFileInfo> VisibleEpisodes => Episodes.Where(IsVisible).ToList();
    
    public string FallbackProfileUrl { get; set; } = Svg.ToDataUri(Svg.Create(Svg.Body.User, stroke:"none").Replace("fill='currentColor'","fill='#0891b2'"));
    public string FallbackSplashUrl { get; set; } = "https://picsum.photos/2000/1000";

    public PodcastConfig Config { get; set; } = new();
    public List<AuthorInfo> Authors { get; set; } = [];

    public Dictionary<string, AuthorInfo> AuthorSlugMap { get; } = new();
    public Dictionary<string, string> TagSlugMap { get; } = new();

    public void GenerateSlugs()
    {
        AuthorSlugMap.Clear();
        TagSlugMap.Clear();
        
        foreach (var author in Authors)
        {
            AuthorSlugMap[author.Name.GenerateSlug()] = author;
        }
        foreach (var post in Episodes)
        {
            foreach (var tag in post.Tags.Safe())
            {
                TagSlugMap[tag.GenerateSlug()] = tag;
            }
        }
    }
    
    public string GetAuthorProfileUrl(string? name) => (name != null
            ? Authors.FirstOrDefault(x => x.Name == name)
            : null)?.ProfileUrl
        ?? FallbackProfileUrl;

    public List<MarkdownFileInfo> GetEpisodes(string? author = null, string? tag = null, int? year = null)
    {
        IEnumerable<MarkdownFileInfo> latestEpisodes = Episodes.Where(IsVisible);
        if (author != null)
            latestEpisodes = latestEpisodes.Where(x => x.Author == author);
        if (tag != null)
            latestEpisodes = latestEpisodes.Where(x => x.Tags.Contains(tag));
        if (year != null)
            latestEpisodes = latestEpisodes.Where(x => x.Date.GetValueOrDefault().Year == year);
        return latestEpisodes.OrderByDescending(x => x.Date).ToList();
    }

    public string GetPodcastsAbsoluteUrl() => Config.PublicBaseUrl.CombineWith("podcasts");
    public string GetFeedAbsoluteUrl() => Config.PublicBaseUrl.CombineWith("podcasts","feed.xml");

    public string GetPodcastLink(MarkdownFileInfo post) => $"podcasts/{post.Slug}";

    public string GetPodcastsLink() => "podcasts/";
    public string? GetAuthorLink(string? author) => author != null && Authors.Any(x => x.Name.Equals(author, StringComparison.OrdinalIgnoreCase))
        ? $"podcasts/author/{author.GenerateSlug()}"
        : null;
    
    public string GetYearLink(int year) => $"podcasts/year/{year}";
    public string GetTagLink(string tag) => $"podcasts/tagged/{tag.GenerateSlug()}";
    public string GetDateLabel(DateTime? date) => X.Map(date ?? DateTime.UtcNow, d => d.ToString("MMMM d, yyyy"))!;
    public string GetDateTimestamp(DateTime? date) => X.Map(date ?? DateTime.UtcNow, d => d.ToString("O"))!;

    public AuthorInfo? GetAuthorBySlug(string? slug) => slug != null && AuthorSlugMap.TryGetValue(slug, out var author)
        ? author
        : null;

    public string? GetTagBySlug(string? slug) => slug != null && TagSlugMap.TryGetValue(slug, out var tag)
        ? tag
        : null;

    public string GetSplashImage(MarkdownFileInfo post)
    {
        var splash = post.Image ?? FallbackSplashUrl;
        return splash.StartsWith("https://images.unsplash.com")
            ? splash.LeftPart('?') + "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80"
            : splash;
    }

    public MarkdownFileInfo? FindPodcastBySlug(string name) => Fresh(VisibleEpisodes.FirstOrDefault(x => x.Slug == name));

    public override MarkdownFileInfo? Load(string path, MarkdownPipeline? pipeline = null)
    {
        var file = VirtualFiles.GetFile(path)
            ?? throw new FileNotFoundException(path.LastRightPart('/'));
        var content = file.ReadAllText();

        var writer = new StringWriter();
        var doc = CreateMarkdownFile(string.Empty, content, writer, pipeline);
        if (doc.Title == null)
        {
            log.LogWarning("No frontmatter found for {VirtualPath}, ignoring...", file.VirtualPath);
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
            log.LogWarning("Could not parse date '{DatePart}', ignoring...", datePart);
            return null;
        }

        doc.WordCount = WordCount(content);
        doc.LineCount = LineCount(content);
        doc.Date = date;
        writer.Flush();
        doc.Preview = writer.ToString();
        
        return doc;
    }

    public void LoadFrom(string fromDirectory)
    {
        Authors.Clear();
        Episodes.Clear();
        var files = VirtualFiles.GetDirectory(fromDirectory).GetAllFiles().ToList();
        log.LogInformation("Found {Count} podcasts", files.Count);

        var pipeline = CreatePipeline(string.Empty);

        foreach (var file in files)
        {
            if (file.Name == "config.json")
            {
                Config = file.ReadAllText().FromJson<PodcastConfig>();
            }
            else if (file.Name == "authors.json")
            {
                Authors = file.ReadAllText().FromJson<List<AuthorInfo>>();
            }
            else if (file.Extension == "md")
            {
                try
                {
                    var doc = Load(file.VirtualPath, pipeline);
                    if (doc == null)
                        continue;

                    Episodes.Add(doc);
                }
                catch (Exception e)
                {
                    log.LogError(e, "Couldn't load {VirtualPath}: {Message}", file.VirtualPath, e.Message);
                }
            }
        }

        GenerateSlugs();
    }

    public override List<MarkdownFileBase> GetAll() => 
        VisibleEpisodes.Map(doc => ToMetaDoc(doc, x => x.Url ??= $"/posts/{x.Slug}"));
}