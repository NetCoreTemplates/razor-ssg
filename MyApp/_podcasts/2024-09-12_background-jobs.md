---
title: Background Jobs
tags: [jobs,admin-ui,commands,api]
summary: Taking a deep dive into Background Jobs, a new library for .NET 8 Apps for simplifying task scheduling and management
url: https://media.servicestack.com/podcasts/background-jobs.mp3
media: {size:1990029,duration:497.448000,format:mp3}
---

This episode covers Background Jobs, a new library for .NET 8 Apps which provides a mechanism 
for managing and scheduling background tasks. 

This feature allows developers to execute existing APIs or custom commands in the background, 
schedule recurring tasks using cron expressions or Time Spans, and track the status and 
progress of jobs. 

Background Jobs uses SQLite for persistence and offers a real-time administration UI for 
monitoring and managing tasks. It covers an overview of the feature's capabilities, including 
how to use it, configure options, and implementing custom commands.

### Getting Started

Create any new [Identity Auth template](/start) which is pre-configured with Background Jobs, e.g:

<project-creator v-slot="x">
    <project-template :name="x.text" repo="NetCoreTemplates/blazor-vue" :tags="['auth','vue']">
        <div class="mb-3 text-xl font-medium text-gray-700 dark:text-gray-200">Blazor Vue</div>
        <template #icon>
            <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="color:rgb(168 85 247)" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"></path></svg>
        </template>
    </project-template>
</project-creator>

Alternatively create a new project with the [x dotnet tool](https://docs.servicestack.net/dotnet-new):

:::sh
x new blazor-vue ProjectName
:::

### Videos

:::youtube 2Cza_a_rrjA
Durable Background Jobs and Scheduled Tasks for .NET
:::

:::youtube DtB8KaXXMCM
Schedule your Reoccurring Tasks with Background Jobs!
:::

### Links

- [Blog Post](/posts/background-jobs)