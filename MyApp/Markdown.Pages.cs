// run node postinstall.js to update to latest version
using ServiceStack.IO;
using ServiceStack.Logging;

namespace Ssg;

public class MarkdownPages : MarkdownPagesBase<MarkdownFileInfo>
{
    public override string Id => "pages";
    public MarkdownPages(ILogger<MarkdownPages> log, IWebHostEnvironment env) : base(log,env) {}
    List<MarkdownFileInfo> Pages { get; set; } = new();
    public List<MarkdownFileInfo> GetVisiblePages(string? prefix=null) => prefix == null 
        ? Pages.Where(x => IsVisible(x) && !x.Slug!.Contains('/')).OrderBy(x => x.Order).ToList()
        : Pages.Where(x => IsVisible(x) && x.Slug!.StartsWith(prefix.WithTrailingSlash())).OrderBy(x => x.Order).ToList();

    public MarkdownFileInfo? GetBySlug(string slug) => 
        Fresh(Pages.Where(IsVisible).FirstOrDefault(x => x.Slug == slug));

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

                var relativePath = file.VirtualPath.Substring(fromDirectory.Length + 1);
                if (relativePath.IndexOf('/') >= 0)
                {
                    doc.Slug = relativePath.LeftPart('/') + '/' + doc.Slug;
                }

                Pages.Add(doc);
            }
            catch (Exception e)
            {
                log.Error(e, "Couldn't load {0}: {1}", file.VirtualPath, e.Message);
            }
        }
    }

    public override List<MarkdownFileBase> GetAll() => Pages.Where(IsVisible).Map(doc => ToMetaDoc(doc, x => x.Url = $"/{x.Slug}"));
}
