using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Podcasts;

public class PodcastModel : PageModel
{
    [FromRoute]
    public string? Slug { get; set; }
}