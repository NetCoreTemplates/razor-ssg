---
layout: _LayoutContent
title: New Blogging Features
summary: Look at the new Blogging features in the latest version of Razor SSG
tags: razor,markdown,blog,dev
image: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000
author: Brandon Foley
---

The Razor SSG template continues to improve support for static generated websites and Blogs with new features for
creating richer and more discoverable blogs:

### RSS Feed

Razor SSG websites now generates a valid RSS Feed for its blog to support their readers who'd prefer to read blog posts
with their favorite RSS reader:

<div class="not-prose my-8">
   <a href="https://razor-ssg.web-templates.io/feed.xml">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="max-w-3xl py-8" src="https://docs.servicestack.net/img/pages/release-notes/v6.10/valid-rss.png">
      </div>
   </a>
   <div class="mt-4 flex justify-center">
      <a class="text-indigo-600 hover:text-indigo-800" href="https://razor-ssg.web-templates.io/feed.xml">https://razor-ssg.web-templates.io/feed.xml</a>
   </div>
</div>

### New Markdown Containers

All Razor Press's [Markdown Containers](https://razor-press.web-templates.io/containers) are also available in Razor SSG
websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::
```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::

See [Markdown Containers docs](https://razor-press.web-templates.io/containers) for more examples and how to 
implement your own [Custom Markdown containers](https://razor-press.web-templates.io/containers#implementing-block-containers).

### Support for Includes

Markdown fragments can be added to `_pages/_include` - a special folder rendered with
[Pages/Includes.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Includes.cshtml) using
an [Empty Layout](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutEmpty.cshtml)
which can be included in other Markdown and Razor Pages or fetched on demand with Ajax.

Markdown Fragments can be then included inside other markdown documents with the `::include` inline container, e.g:

:::pre
::include vue/formatters.md::
:::

Where it will be replaced with the HTML rendered markdown contents of fragments maintained in `_pages/_include`.

### Include Markdown in Razor Pages

Markdown Fragments can also be included in Razor Pages using the custom `MarkdownTagHelper.cs` `<markdown/>` tag:

```html
<markdown include="vue/formatters.md"></markdown>
```

### Inline Markdown in Razor Pages

Alternatively markdown can be rendered inline with:

```html
<markdown>
## Using Formatters

Your App and custom templates can also utilize @servicestack/vue's
[built-in formatting functions](href="/vue/use-formatters).
</markdown>
```

### Meta Headers support for Twitter cards and Improved SEO

Blog Posts and Pages now include additional `<meta>` HTML Headers to enable support for 
[Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) in both
Twitter and Meta's new [threads.net](https://threads.net), e.g:

<div class="not-prose my-8 flex justify-center">
   <a class="block max-w-2xl" href="https://www.threads.net/@servicestack/post/CvIFobPBs5h">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="py-8" src="https://docs.servicestack.net/img/pages/release-notes/v6.10/twitter-cards.png">
      </div>
   </a>
</div>

### Posts can include Vue Components

Blog Posts can now embed any global Vue Components directly in their Markdown, e.g: 

```html
<getting-started template="razor-ssg"></getting-started>
```

<div class="not-prose my-20 flex justify-center">
    <getting-started template="razor-ssg"></getting-started>
</div>

Just like Pages and Docs they can also include specific JavaScript **.mjs** or **.css** in the `/wwwroot/posts` folder
which will only be loaded for that post:

<file-layout :files="{
    wwwroot: { 
        posts: { _: ['<slug>.mjs','<slug>.css'] },
    }
}"></file-layout>

Now posts that need it can dynamically load large libraries like [Chart.js](https://www.chartjs.org) and use it 
inside a custom Vue component by creating a custom `/posts/<slug>.mjs` that exports what components and features
your blog post needs, e.g:

#### [/posts/new-blog-features.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs)

```js
import { ChartJs } from './chart.mjs'

export default {
    components: { ChartJs }
}
```

In this case it enables support for [Chart.js](https://www.chartjs.org) by including a custom Vue component that makes it
easy to create charts from Vue Components embedded in markdown:

#### [/posts/Chart.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/chart.mjs)

```js
import { ref, onMounted } from "vue"
import { addScript } from "@servicestack/client"

const loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

export const ChartJs = {
    template:`<div><canvas ref="chart"></canvas></div>`,
    props:['type','data','options'],
    setup(props) {
        const chart = ref()
        onMounted(async () => {
            await loadJs

            const options = props.options || {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            new Chart(chart.value, {
                type: props.type || "bar",
                data: props.data,
                options,
            })

        })
        return { chart }
    }
}
```

Which allows this post to embed Chart.js charts using the above custom `<chart-js>` Vue component and a JS Object literal, e.g: 

```html
<chart-js :data="{
    labels: [
        //...
    ],
    datasets: [
        //...
    ]
}"></chart-js>
```

Which the [Bulk Insert Performance](https://servicestack.net/posts/bulk-insert-performance) Blog Post uses extensively to embeds its
Chart.js Bar charts:

<chart-js :data="{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
        {
            label: 'SQLite Memory',
            backgroundColor: 'rgba(201, 203, 207, 0.2)',
            borderColor: 'rgb(201, 203, 207)',
            borderWidth: 1,
            data: [17.066, 166.747]
        },
        {
            label: 'SQLite Disk',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: [20.224, 199.697]
        },
        {
            label: 'PostgreSQL',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgb(153, 102, 255)',
            borderWidth: 1,
            data: [14.389, 115.645]
        },
        {
            label: 'MySQL',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [64.389, 310.966]
        },
        {
            label: 'MySqlConnector',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgb(255, 159, 64)',
            borderWidth: 1,
            data: [64.427, 308.574]
        },
        {
            label: 'SQL Server',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: [89.821, 835.181]
        }
    ]
}"></chart-js>

### Improved Discoverability

To improve discoverability and increase site engagement, bottom of blog posts now include links to other posts by
the same Blog Author, including links to connect to their preferred social networks and contact preferences: 

![](https://servicestack.net/img/posts/razor-ssg/other-author-posts.png)

### Light and Dark Mode Query Params

You can link to Dark and Light modes of your Razor SSG website with the `?light` and `?dark` query string params:

- [https://razor-ssg.web-templates.io/?dark](https://razor-ssg.web-templates.io/?dark)
- [https://razor-ssg.web-templates.io/?light](https://razor-ssg.web-templates.io/?light)

### Blog Post Authors new threads.net and Mastodon links

The social links for Blog Post Authors can now include [threads.net](https://threads.net) and 
[mastodon.social](https://mastodon.social) links in their App configurations:

```json
{
  "AppConfig": {
    "BlogImageUrl": "https://servicestack.net/img/logo.png",
    "Authors": [
      {
        "Name": "Lucy Bates",
        "Email": "lucy@email.org",
        "ProfileUrl": "img/authors/author1.svg",
        "TwitterUrl": "https://twitter.com/lucy",
        "ThreadsUrl": "https://threads.net/@lucy",
        "GitHubUrl": "https://github.com/lucy"
        "MastodonUrl": "https://mastodon.social/@luch"
      }
    ]
  }
}
```