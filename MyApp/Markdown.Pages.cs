// run node postinstall.js to update to latest version
using ServiceStack.IO;
using ServiceStack.Logging;

namespace Ssg;

public class MarkdownPages : MarkdownPagesBase<MarkdownFileInfo>
{
    public MarkdownPages(ILogger<MarkdownPages> log, IWebHostEnvironment env) : base(log,env) {}
    List<MarkdownFileInfo> Pages { get; set; } = new();
    public List<MarkdownFileInfo> VisiblePages => Pages.Where(IsVisible).ToList();

    public MarkdownFileInfo? GetBySlug(string slug) => Fresh(VisiblePages.FirstOrDefault(x => x.Slug == slug));

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
