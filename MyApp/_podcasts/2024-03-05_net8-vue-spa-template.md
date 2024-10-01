---
title: New Vue SPA Template
summary: Getting to know the advanced features and capabilities of the enhanced Vite TypeScript Vue SPA template for .NET 8
tags: [template,vue,.net8,autoquery]
url: https://media.servicestack.com/podcasts/net8-vue-spa-template.mp3
media: {size:1414413,duration:353.544000,format:mp3}
---

This episode focuses on the new Vue Single Page Application (SPA) template designed for .NET 8. 
It details how this template builds upon the ASP.NET Core Vue SPA template by incorporating 
ServiceStack's high-productivity features. Specifically, API integration, end-to-end typing, 
Vue components, built-in authentication, Tailwind CSS, dark mode, and a Vite Press plugin. 

The Vue SPA template aims to provide developers with a more efficient and enjoyable experience 
when building web applications with .NET 8 and Vue.

### Getting Started

Create a new Vue SPA App with your preferred project name:

<project-creator v-slot="x">
    <project-template :name="x.text" repo="NetCoreTemplates/vue-spa" :tags="['vite','auth']">
        <div class="mb-3 text-xl font-medium text-gray-700 dark:text-gray-200">Vue SPA</div>
        <template #icon>
            <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.16em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>
        </template>
    </project-template>
</project-creator>

Alternatively create a new project with the [x dotnet tool](https://docs.servicestack.net/dotnet-new):

:::sh
x new vue-spa ProjectName
:::

### Videos

:::youtube JlUjWlVslRg
Explore the high productivity features in the new ServiceStack Vue SPA template
:::

### Links

- [Blog Post](/posts/net8-vue-spa-template)