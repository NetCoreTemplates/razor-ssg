using Microsoft.AspNetCore.Mvc.Rendering;
using ServiceStack.IO;

[assembly: HostingStartup(typeof(MyApp.AppHost))]

namespace MyApp;

public class AppHost() : AppHostBase("MyApp"), IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            // Configure ASP.NET Core IOC Dependencies
            context.Configuration.GetSection(nameof(AppConfig)).Bind(AppConfig.Instance);
            services.AddSingleton(AppConfig.Instance);
        });
}

public class AppConfig
{
    public static AppConfig Instance { get; } = new();
    public string Title { get; set; }
    public string LocalBaseUrl { get; set; }
    public string PublicBaseUrl { get; set; }
    public string? GitPagesBaseUrl { get; set; }
    public string? GitPagesRawBaseUrl { get; set; }

    public void Init(IVirtualDirectory contentDir)
    {
        ResolveGitBlobBaseUrls(contentDir);
    }

    public void ResolveGitBlobBaseUrls(IVirtualDirectory contentDir)
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
                GitPagesBaseUrl = url.CombineWith($"blob/main/{srcDir.Name}");
                GitPagesRawBaseUrl = url.Replace("github.com","raw.githubusercontent.com").CombineWith($"refs/heads/main/{srcDir.Name}");
            }
        }
    }
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

public class Hello : IGet, IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
