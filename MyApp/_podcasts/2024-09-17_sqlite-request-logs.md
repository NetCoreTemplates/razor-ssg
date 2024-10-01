---
title: SQLite Request Logging
tags: [sqlite,logging,admin-ui,api]
summary: Checking out ServiceStack's new SQLite-backed Request Logs feature and enhanced log querying and filtering in the Admin UI
url: https://media.servicestack.com/podcasts/sqlite-request-logs.mp3
media: {size:809613,duration:202.344000,format:mp3}
---

This episode describes the new `SqliteRequestLogger` feature which uses SQLite databases to store 
logs of requests made to the web service. SQLite is chosen for its ability to create lightweight databases 
on the fly, enabling the storage of request logs without requiring an existing database infrastructure. 

The logs are organized into monthly databases, allowing for easy archiving and efficient data analysis. 
It also introduces a new user interface for browsing and querying the request logs, replacing the 
traditional Logging UI with an AutoQueryGrid for more advanced filtering and sorting capabilities. 
This allows developers to gain valuable insights into the usage of their web services through these 
granular logs and monthly aggregate reports.

### Getting Started

Configure existing .NET 8 Projects to use the new `SqliteRequestLogger` by running:

:::sh
x mix sqlitelogs
:::

### Links

- [Blog Post](/posts/sqlite-request-logs)
