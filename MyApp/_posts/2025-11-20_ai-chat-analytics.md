---
title: AI Chat history persistence and Admin Analytics UI
summary: Maintain a persistant history of all AI Chat requests and responses
tags: [llms,ai,chat,admin-ui,analytics]
author: Demis Bellot
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&fit=crop&h=1000&w=2000
---

ServiceStack's [AI Chat](https://docs.servicestack.net/ai-chat-api) feature provides a unified API for integrating multiple AI providers into your applications. To gain visibility into usage patterns, costs, and performance across your AI infrastructure, the platform includes comprehensive chat history persistence and analytics capabilities.

:::sh
npx add-in chat
:::

Or by referencing the **ServiceStack.AI.Chat** NuGet package and adding the `ChatFeature` plugin:

```csharp
services.AddPlugin(new ChatFeature {
    EnableProviders = [
        "servicestack",
    ]
});
```

## AI Chat History Persistence

Enabling chat history persistence allows you to maintain a complete audit trail of all AI interactions, track token consumption, monitor costs across providers and models, and analyze usage patterns over time that captures every 
request and response flowing through AI Chat's UI, external OpenAI endpoints and internal `IChatStore` requests.

### Database Storage Options

ServiceStack provides two storage implementations to suit different deployment scenarios:

`DbChatStore` - A universal solution that stores chat history in a single table compatible with any RDBMS 
[supported by OrmLite](https://docs.servicestack.net/ormlite/getting-started):

```csharp
services.AddSingleton<IChatStore,DbChatStore>();
```

`PostgresChatStore` - An optimized implementation for PostgreSQL that leverages monthly table partitioning for improved query performance and data management:

```csharp
services.AddSingleton<IChatStore, PostgresChatStore>();
```

Both implementations utilize indexed queries with result limits to ensure consistent performance even as your chat history grows. The partitioned approach in PostgreSQL offers additional benefits for long-term data retention and archival strategies.

## Admin UI Analytics

Once chat history persistence is enabled, the Admin UI provides comprehensive analytics dashboards that deliver actionable insights into your AI infrastructure. The analytics interface offers multiple views to help you understand costs, optimize token usage, and monitor activity patterns across all configured AI providers and models.

The analytics dashboard includes three primary tabs:

- **Cost Analysis** - Track spending across providers and models with daily and monthly breakdowns
- **Token Usage** - Monitor input and output token consumption to identify optimization opportunities
- **Activity** - Review detailed request logs with full conversation history and metadata

These visualizations enable data-driven decisions about provider selection, model usage, and cost optimization strategies.

### Cost Analysis

The Cost Analysis tab provides financial visibility into your AI operations with interactive visualizations showing spending distribution across providers and models. Daily cost trends help identify usage spikes, while monthly aggregations reveal long-term patterns. Pie charts break down costs by individual models and providers, making it easy to identify your most expensive AI resources and opportunities for cost optimization.

:::{.wideshot}
![](https://servicestack.net/img/posts/ai-chat-analytics/admin-chat-costs.webp)
:::

### Token Usage

The Token Usage tab tracks both input (prompt) and output (completion) tokens across all requests. Daily usage charts display token consumption trends over time, while model and provider breakdowns show which AI resources consume the most tokens. This granular visibility helps optimize prompt engineering, identify inefficient usage patterns, and forecast capacity requirements.

:::{.wideshot}
![](https://servicestack.net/img/posts/ai-chat-analytics/admin-chat-tokens.webp)
:::

### Activity Log

The Activity tab maintains a searchable log of all AI chat requests, displaying timestamps, models, providers, and associated costs. Clicking any request opens a detailed view showing the complete conversation including user prompts, AI responses, token counts, duration, and the full request payload. This audit trail is invaluable for debugging, quality assurance, and understanding how your AI features are being used in production.

:::{.wideshot}
![](https://servicestack.net/img/posts/ai-chat-analytics/admin-chat-activity.webp)
:::
