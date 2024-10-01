---
title: ASP.NET Core Output Caching
summary: A look at how to use ASP.NET Core Output Caching and ServiceStack.Redis to cache the response of ServiceStack APIs in Redis
tags: [caching,.net8,redis]
url: https://media.servicestack.com/podcasts/redis-outputcache.mp3
media: {size:2012973,duration:503.184000,format:mp3}
---

This episode discusses how to use ASP.NET Core Output Caching to improve the performance of 
ServiceStack applications and how to enable Output Caching in the request pipeline, 
configure caching behaviors for ServiceStack Endpoints, and use the [OutputCache] attribute to 
apply caching at the service level. 

It also demonstrates how to implement a distributed cache using Redis, enabling scaling and 
sharing cache data across multiple servers and emphasizes the importance of using Output Caching 
strategically to optimize the performance of frequently accessed data, while acknowledging the 
need for appropriate cache invalidation strategies to ensure data freshness.

### Links

- [Blog Post](/posts/redis-outputcache)