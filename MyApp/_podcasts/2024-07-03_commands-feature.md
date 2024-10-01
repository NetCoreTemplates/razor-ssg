---
title: Commands Feature
tags: [commands,admin-ui,api]
summary: Looking into how to utilize Commands to build more robust and observable systems
url: https://media.servicestack.com/podcasts/commands-feature.mp3
media: {size:2474061,duration:618.456000,format:mp3}
---

This episode focuses on the new Commands Feature in ServiceStack which provides a structured 
approach to implementing internal logic for improved code reusability, testability, observability,
and robustness. It allows developers to separate logic into independent units called Commands, 
which can be executed in managed background threads. 

This architecture fosters temporal decoupling, allowing asynchronous execution of commands 
and handling of errors with greater efficiency and resilience. The Commands Admin UI offers a 
comprehensive overview of command execution, including summary statistics, recent executions, 
and error logs. 

The integration of the Commands Feature with the Background MQ enables scalable execution of 
commands, particularly valuable for working with server-side SQLite databases which have 
limitations on concurrent writes.

### Videos

:::youtube SXPdBHbncPc
Use Commands to build robust and observable systems with Admin UI
:::

### Links

- [Blog Post](/posts/commands-feature)
