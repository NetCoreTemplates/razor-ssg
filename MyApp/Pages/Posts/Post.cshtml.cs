using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Posts;

public class PostModel : PageModel
{
    [FromRoute]
    public string? Slug { get; set; }
}