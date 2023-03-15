using ServiceStack.IO;

[assembly: HostingStartup(typeof(MyApp.ConfigureSsg))]

namespace MyApp;

public class ConfigureSsg : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services =>
        {
            services.AddSingleton<RazorPagesEngine>();
            services.AddSingleton<Blog>();
            services.AddSingleton<WhatsNew>();
        })
        .ConfigureAppHost(
            appHost => appHost.Plugins.Add(new CleanUrlsFeature()),
            afterPluginsLoaded: appHost =>
            {
                var whatsNew = appHost.Resolve<WhatsNew>();
                whatsNew.VirtualFiles = appHost.VirtualFiles;
                whatsNew.LoadFeatures("_whatsnew");
                
                var blogPosts = appHost.Resolve<Blog>();
                blogPosts.VirtualFiles = appHost.VirtualFiles;
                blogPosts.LoadPosts("_posts");
            },
            afterAppHostInit: appHost =>
            {
                // prerender with: `$ npm run prerender` 
                AppTasks.Register("prerender", args =>
                {
                    var distDir = appHost.ContentRootDirectory.RealPath.CombineWith("dist");
                    FileSystemVirtualFiles.DeleteDirectory(distDir);
                    FileSystemVirtualFiles.CopyAll(
                        new DirectoryInfo(appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot")),
                        new DirectoryInfo(distDir));
                    var razorFiles = appHost.VirtualFiles.GetAllMatchingFiles("*.cshtml");
                    RazorSsg.PrerenderAsync(appHost, razorFiles, distDir).GetAwaiter().GetResult();
                });
            });

}

public class MarkdownFileInfo
{
    public string Path { get; set; } = default!;
    public string? Slug { get; set; }
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
