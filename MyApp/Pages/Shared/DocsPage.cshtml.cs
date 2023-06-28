using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Shared;

public class DocsPage : PageModel
{
    public string? Brand { get; set; }
    public string Slug { get; set; }
    public string Folder { get; set; }
    public MarkdownMenu? DefaultMenu { get; set; }
    public MarkdownFileInfo? Doc { get; set; }

    public DocsPage Init(Microsoft.AspNetCore.Mvc.RazorPages.Page page, MarkdownPages markdown)
    {
        Doc = markdown.GetBySlug($"{Folder}/{Slug}");
        if (Doc == null)
        {
            page.Response.Redirect("/404");
            return this;
        }

        if (!string.IsNullOrEmpty(Brand))
        {
            page.ViewContext.ViewData["Brand"] = Brand;
        }
        
        page.ViewContext.ViewData["Title"] = Doc.Title;
        return this;
    }
}