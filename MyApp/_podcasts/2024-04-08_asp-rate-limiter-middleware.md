---
title: ASP.NET Core Rate Limiter Middleware
summary: A guide explaining how ASP.NET Core's Rate Limiter Middleware can be used to protect ServiceStack APIs and Apps from abuse
tags: [.net8,auth,middleware]
url: https://media.servicestack.com/podcasts/asp-rate-limiter-middleware.mp3
media: {size:2585901,duration:646.416000,format:mp3}
---

This episode looks at how to use ASP.NET Core's built-in rate limiting middleware to protect 
web APIs and applications from excessive traffic. 

It outlines the basic configuration for setting up rate limiting based on client IP address or 
client ID and then explores more advanced options for customizing the behavior, 
such as implementing a sliding window algorithm to allow short bursts of requests while 
constraining the average rate. 

The text then delves into per-user rate limiting for multi-tenant SaaS applications, explaining 
how to leverage ASP.NET Core Identity to authenticate users and retrieve their plan details, 
and then configure the rate limiter accordingly. 

By combining ASP.NET Core rate limiting with ASP.NET Core Identity, developers can create 
flexible and effective per-user rate limits that ensure fair usage and protect applications 
from abuse.

### Links

- [Blog Post](/posts/asp-rate-limiter-middleware)