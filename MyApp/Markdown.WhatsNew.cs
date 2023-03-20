﻿// run node postinstall.js to update with latest version
using System.Globalization;
using ServiceStack.IO;

namespace Ssg;

public class MarkdownWhatsNew : MarkdownPagesBase<MarkdownFileInfo>
{
    public MarkdownWhatsNew(ILogger<MarkdownWhatsNew> log) : base(log) {}
    public Dictionary<string, List<MarkdownFileInfo>> Features { get; set; } = new();

    public List<MarkdownFileInfo> GetFeatures(string release)
    {
        return Features.TryGetValue(release, out var doc)
            ? Fresh(doc)
            : new List<MarkdownFileInfo>();
    }
    
    public void LoadFrom(string fromDirectory)
    {
        Features.Clear();
        var fs = AssertVirtualFiles();
        var dirs = fs.GetDirectory(fromDirectory).GetDirectories().ToList();
        log.LogInformation("Found {0} whatsnew directories", dirs.Count);

        var pipeline = CreatePipeline();

        foreach (var dir in dirs)
        {
            var datePart = dir.Name.LeftPart('_');
            if (!DateTime.TryParseExact(datePart, "yyyy-MM-dd", CultureInfo.InvariantCulture,
                    DateTimeStyles.AdjustToUniversal, out var date))
            {
                log.LogWarning("Could not parse date '{0}', ignoring...", datePart);
                continue;
            }

            var releaseVersion = dir.Name.RightPart('_');
            var releaseDate = date;

            foreach (var file in dir.GetFiles().OrderBy(x => x.Name))
            {
                try
                {
                    var doc = Load(file.VirtualPath, pipeline);
                    if (doc == null)
                        continue;
                    
                    doc.Date = releaseDate;

                    var releaseFeatures = Features.GetOrAdd(releaseVersion, v => new List<MarkdownFileInfo>());
                    releaseFeatures.Add(doc);
                }
                catch (Exception e)
                {
                    log.LogError(e, "Couldn't load {0}: {1}", file.VirtualPath, e.Message);
                }
            }
        }
    }
}