[assembly: HostingStartup(typeof(MyApp.AppHost))]

namespace MyApp;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
            var deployCdn = Environment.GetEnvironmentVariable("DEPLOY_CDN");
            services.AddSingleton(new AppConfig {
                BaseUrl = deployCdn != null
                    ? $"https://{deployCdn}"
                    : "https://localhost:5002"
            });
        });

    public AppHost() : base("MyApp", typeof(MyServices).Assembly) {}

    public override void Configure(Funq.Container container)
    {
    }
}

public class AppConfig
{
    public string BaseUrl { get; set; }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
