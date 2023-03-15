using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Posts;

public class PostModel : PageModel
{
    public Blog Blog { get; }
    public PostModel(Blog blog) => Blog = blog;

    [FromQuery]
    public bool Static { get; set; }
    [FromRoute]
    public string? Slug { get; set; }
    public string? Title { get; set; }
    public string? Author { get; set; }
    public string? Splash { get; set; }
    public string? AuthorProfileUrl { get; set; }
    public List<string> Tags { get; set; } = new();
    public DateTime? Date { get; set; }
    public int? WordCount { get; set; }
    public string? HtmlContent { get; set; }

    public void OnGet()
    {
        if (string.IsNullOrEmpty(Title) && Slug != null)
        {
            var doc = Blog.FindPostBySlug(Slug);
            if (doc != null && HostContext.AppHost.IsDevelopmentEnvironment())
                doc = Blog.Load(doc.Path);
            if (doc != null)
            {
                Populate(doc);
            }
        }
    }

    public PostModel Populate(MarkdownFileInfo doc)
    {
        Title = doc.Title;
        Slug = doc.Slug;
        Tags = doc.Tags;
        Author = doc.Author;
        AuthorProfileUrl = Blog.GetAuthorProfileUrl(doc.Author);
        Splash = doc.Image ?? Blog.FallbackSplashUrl;
        Date = doc.Date;
        HtmlContent = doc.Preview;
        WordCount = doc.WordCount;
        return this;
    }
}
