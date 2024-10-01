using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Shared;

public class PodcastEpisodes : PageModel
{
    public List<MarkdownFileInfo> Episodes { get; set; } = [];
}