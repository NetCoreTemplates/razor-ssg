using Microsoft.AspNetCore.Mvc.Rendering;
using ServiceStack.IO;

[assembly: HostingStartup(typeof(MyApp.ConfigureSsg))]

namespace MyApp;

public class ConfigureSsg : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) =>
        {
            context.Configuration.GetSection(nameof(AppConfig)).Bind(AppConfig.Instance);
            services.AddSingleton(AppConfig.Instance);
            services.AddSingleton<RazorPagesEngine>();
            services.AddSingleton<MarkdownPages>();
            services.AddSingleton<MarkdownWhatsNew>();
            services.AddSingleton<MarkdownVideos>();
            services.AddSingleton<MarkdownBlog>();
            services.AddSingleton<MarkdownMeta>();
        })
        .ConfigureAppHost(
            appHost => appHost.Plugins.Add(new CleanUrlsFeature()),
            afterPluginsLoaded: appHost =>
            {
                var pages = appHost.Resolve<MarkdownPages>();
                var whatsNew = appHost.Resolve<MarkdownWhatsNew>();
                var videos = appHost.Resolve<MarkdownVideos>();
                var blogPosts = appHost.Resolve<MarkdownBlog>();
                var meta = appHost.Resolve<MarkdownMeta>();

                blogPosts.Authors = AppConfig.Instance.Authors;
                meta.Features = new() { pages, whatsNew, videos, blogPosts };
                meta.Features.ForEach(x => x.VirtualFiles = appHost.VirtualFiles);
                
                pages.LoadFrom("_pages");
                whatsNew.LoadFrom("_whatsnew");
                videos.LoadFrom("_videos");
                blogPosts.LoadFrom("_posts");
                AppConfig.Instance.GitPagesBaseUrl ??= ResolveGitBlobBaseUrl(appHost.ContentRootDirectory);
            },
            afterAppHostInit: appHost =>
            {
                // prerender with: `$ npm run prerender` 
                AppTasks.Register("prerender", args =>
                {
                    appHost.Resolve<MarkdownMeta>().RenderToAsync(
                        metaDir: appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot/meta"),
                        baseUrl: HtmlHelpers.ToAbsoluteContentUrl("")).GetAwaiter().GetResult();

                    var distDir = appHost.ContentRootDirectory.RealPath.CombineWith("dist");
                    if (Directory.Exists(distDir))
                        FileSystemVirtualFiles.DeleteDirectory(distDir);
                    FileSystemVirtualFiles.CopyAll(
                        new DirectoryInfo(appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot")),
                        new DirectoryInfo(distDir));
                    
                    // Render .html redirect files
                    RazorSsg.PrerenderRedirectsAsync(appHost.ContentRootDirectory.GetFile("redirects.json"), distDir)
                        .GetAwaiter().GetResult();

                    var razorFiles = appHost.VirtualFiles.GetAllMatchingFiles("*.cshtml");
                    RazorSsg.PrerenderAsync(appHost, razorFiles, distDir).GetAwaiter().GetResult();
                });
            });
    
    private string? ResolveGitBlobBaseUrl(IVirtualDirectory contentDir)
    {
        var srcDir = new DirectoryInfo(contentDir.RealPath);
        var gitConfig = new FileInfo(Path.Combine(srcDir.Parent!.FullName, ".git", "config"));
        if (gitConfig.Exists)
        {
            var txt = gitConfig.ReadAllText();
            var pos = txt.IndexOf("url = ", StringComparison.Ordinal);
            if (pos >= 0)
            {
                var url = txt[(pos + "url = ".Length)..].LeftPart(".git").LeftPart('\n').Trim();
                var gitBaseUrl = url.CombineWith($"blob/main/{srcDir.Name}");
                return gitBaseUrl;
            }
        }
        return null;
    }
}

public class AppConfig
{
    public static AppConfig Instance { get; } = new();
    public string LocalBaseUrl { get; set; }
    public string PublicBaseUrl { get; set; }
    public string? GitPagesBaseUrl { get; set; }
    public string? SiteTwitter { get; set; }
    public List<AuthorInfo> Authors { get; set; } = new();
    public string? BlogTitle { get; set; }
    public string? BlogDescription { get; set; }
    public string? BlogEmail { get; set; }
    public string? CopyrightOwner { get; set; }
    public string? BlogImageUrl { get; set; }
}

// Add additional frontmatter info to include
public class MarkdownFileInfo : MarkdownFileBase
{
}

public static class HtmlHelpers
{
    public static string ToAbsoluteContentUrl(string? relativePath) => HostContext.DebugMode 
        ? AppConfig.Instance.LocalBaseUrl.CombineWith(relativePath)
        : AppConfig.Instance.PublicBaseUrl.CombineWith(relativePath);
    public static string ToAbsoluteApiUrl(string? relativePath) => HostContext.DebugMode 
        ? AppConfig.Instance.LocalBaseUrl.CombineWith(relativePath)
        : AppConfig.Instance.PublicBaseUrl.CombineWith(relativePath);


    public static string ContentUrl(this IHtmlHelper html, string? relativePath) => ToAbsoluteContentUrl(relativePath); 
    public static string ApiUrl(this IHtmlHelper html, string? relativePath) => ToAbsoluteApiUrl(relativePath);
}
