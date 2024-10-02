---
title: Podcasts now in Razor SSG
summary: Razor SSG now includes support for Podcasts
tags: [razor,ssg,markdown]
author: Gayle Smith
image: https://images.unsplash.com/photo-1482442120256-9c03866de390?crop=entropy&fit=crop&h=1000&w=2000
---

## Razor SSG now supports Podcasts!

[Razor SSG](https://razor-ssg.web-templates.io) is our FREE Project Template for creating fast, statically generated Websites and Blogs with
Markdown & C# Razor Pages. A benefit of using Razor SSG to maintain our
[github.com/ServiceStack/servicestack.net](https://github.com/ServiceStack/servicestack.net) website is that 
any improvements added to **servicestack.net** end up being rolled into the Razor SSG Project Template 
for everyone else to enjoy.

The latest feature recently added is [ServiceStack Podcasts](https://servicestack.net/podcasts), providing an easy alternative to 
learning about new features in our [TL;DR Release Notes](https://docs.servicestack.net/releases/v8_04) during a commute as well as a
fun and more informative experience whilst reading [blog posts](https://servicestack.net/blog). 

The same podcast feature has now been rolled into the Razor SSG template allowing anyone to add the same
feature to their Razor SSG Websites which can be developed and hosted for FREE on GitHub Pages CDN:

### Create a new Razor SSG Project

<project-creator v-slot="x">
    <project-template :name="x.text" repo="NetCoreTemplates/razor-ssg" :tags="['ssg','markdown']">
        <div class="mb-3 text-xl font-medium text-gray-700 dark:text-gray-200">Razor SSG</div>
        <template #icon>
            <svg class="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M23.844 27.692a16.332 16.332 0 0 1-6.645 1.3q-6.364 0-10.013-3.243a11.3 11.3 0 0 1-3.649-8.9a13.716 13.716 0 0 1 3.785-9.898A12.716 12.716 0 0 1 16.9 3.008a11.676 11.676 0 0 1 8.425 3.006a9.994 9.994 0 0 1 3.142 7.533a10.187 10.187 0 0 1-2.318 7.114a7.532 7.532 0 0 1-5.817 2.547a2.613 2.613 0 0 1-1.845-.642a2.323 2.323 0 0 1-.764-1.6a4.9 4.9 0 0 1-4.148 2.243a4.6 4.6 0 0 1-3.507-1.479a5.706 5.706 0 0 1-1.384-4.063a9.913 9.913 0 0 1 2.2-6.357q2.2-2.763 4.8-2.763a5.063 5.063 0 0 1 4.256 1.716l.311-1.338h2.405l-2.081 9.08a10.716 10.716 0 0 0-.352 2.243q0 .972.744.972a4.819 4.819 0 0 0 3.877-2.047a8.93 8.93 0 0 0 1.621-5.681a7.98 7.98 0 0 0-2.675-6.175a9.887 9.887 0 0 0-6.919-2.432a10.6 10.6 0 0 0-8.158 3.467a12.066 12.066 0 0 0-3.2 8.495a9.561 9.561 0 0 0 3.06 7.573q3.06 2.7 8.586 2.7a13.757 13.757 0 0 0 5.675-1.054ZM19.466 12.25a3.977 3.977 0 0 0-3.6-1.716q-1.824 0-3.263 2.23a8.726 8.726 0 0 0-1.439 4.824q0 3.635 2.905 3.635a3.771 3.771 0 0 0 2.651-1.183a6.309 6.309 0 0 0 1.7-3.2Z"></path></svg>
        </template>
    </project-template>
</project-creator>

### Markdown Powered

The Podcast feature is very similar to the Markdown Blog Posts where each podcast is a simple
`.md` Markdown page seperated by a publish date and its unique slug, e.g:

**[/_podcasts](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_podcasts)**

```files
/_pages
/_podcasts
    config.json
    2024-10-02_razor-ssg-podcasts.md
    2024-09-19_scalable-sqlite.md
    2024-09-17_sqlite-request-logs.md
    ...
/_posts
/_videos
/_whatsnew
```

All editable content within different Podcast pages like the Podcast Sidebar is customizable within 
[_podcasts/config.json](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_podcasts/config.json).

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-layout.webp)](https://razor-ssg.web-templates.io/podcasts)

### Podcast Page

Whilst all content about a podcast is contained within its `.md` file and frontmatter which just like
Blog Posts can contain interactive Vue Components and custom [Markdown Containers](https://razor-press.web-templates.io/containers).

The [Backgrounds Jobs Podcast Page](https://razor-ssg.web-templates.io/podcasts/background-jobs) is a
good example of this where its [2024-09-12_background-jobs.md](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_podcasts/2024-09-12_background-jobs.md)
contains both a `<project-creator>` Vue Component as well as `sh` and `youtube` custom markdown
containers to render its page:

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-page.webp)](https://razor-ssg.web-templates.io/podcasts/background-jobs)

### Audio Player

Podcasts are played using the [AudioPlayer.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/pages/podcasts/AudioPlayer.mjs)
Vue Component that's enabled on each podcast page which will appear at the bottom of the page when played:

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-audioplayer.webp)](https://razor-ssg.web-templates.io/podcasts)

The `AudioPlayer` component is also independently usable as a standard Vue Component in
markdown content:

```html
<audio-player id="scalable-sqlite" title="Scalable SQLite" variant="compact"
    src="https://media.servicestack.com/podcasts/scalable-sqlite.mp3">
</audio-player>
```

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-audioplayer-compact.webp)](https://razor-ssg.web-templates.io/podcasts)

It can also be embeddable inside Razor `.cshtml` pages using 
[Declarative Vue Components](https://servicestack.net/posts/net8-best-blazor#declarative-vue-components), e.g:

```html
@{
    var episode = Podcasts.GetEpisodes().FirstOrDefault(x => x.Slug == doc.Slug);
    <div data-component="pages/podcasts/AudioPlayer.mjs"
         data-props="{ id:'@episode.Slug', title:'@episode.Title', src:'@episode.Url', variant:'compact' }"
         class="mt-4 md:w-[450px] md:mt-0"></div>
}
```

### Dark Mode

As Razor SSG is built with Tailwind CSS, Dark Mode is also easily supported:

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-dark.webp)](https://razor-ssg.web-templates.io/podcasts/background-jobs)

### Browse by Tags

Just like [blog post archives](https://razor-ssg.web-templates.io/posts/), the frontmatter collection of `tags` is used to generate related podcast pages, 
aiding discoverability by grouping related podcasts by **tag** at the following route: 

    /podcasts/tagged/{tag}

https://razor-ssg.web-templates.io/podcasts/tagged/release

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-tag.webp)](https://razor-ssg.web-templates.io/podcasts/tagged/release)

### Browse by Year

Likewise podcast archives are also browsable by the year their published at the route:

    /podcasts/year/{year}

https://razor-ssg.web-templates.io/podcasts/year/2024

[![](https://servicestack.net/img/posts/razor-ssg-podcasts/razor-ssg-podcast-year.webp)](https://razor-ssg.web-templates.io/podcasts/year/2024)

### iTunes-compatible Podcast RSS Feed

The information in [config.json](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_podcasts/config.json)
is also used in the generated podcast RSS feed at:

[/podcasts/feed.xml](https://razor-ssg.web-templates.io/podcasts/feed.xml)

Which is a popular format podcast Applications can use to get notified when new Podcast
episodes are available. The RSS Feed is also compatible with [podcasters.apple.com](https://podcasters.apple.com)
and can be used to publish your podcast to [Apple Podcasts](https://podcasts.apple.com).

```xml
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:podcast="https://podcastindex.org/namespace/1.0" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
    <channel>
        <title>Their Side</title>
        <link>https://razor-ssg.web-templates.io/podcasts</link>
        <description><![CDATA[ Conversations with the most tragically misunderstood people of our time. ]]></description>
        <image>
            <url>https://razor-ssg.web-templates.io/img/posts/cover.png</url>
            <title>Their Side</title>
            <link>/podcasts</link>
        </image>
        <generator>razor-ssg</generator>
        <copyright>Razor SSG</copyright>
        <lastBuildDate>Wed, 02 Oct 2024 03:54:03 GMT</lastBuildDate>
        <managingEditor>email@example.org (Razor SSG)</managingEditor>
        <webMaster>email@example.org (Razor SSG)</webMaster>
        <atom:link href="https://razor-ssg.web-templates.io/podcasts/feed.xml" rel="self" type="application/rss+xml" />
        <itunes:author>Razor SSG</itunes:author>
        <itunes:owner>
            <itunes:name>Razor SSG</itunes:name>
            <itunes:email>email@example.org</itunes:email>
        </itunes:owner>
        <itunes:image href="https://razor-ssg.web-templates.io/img/posts/cover-1920.jpg"/>
...
```