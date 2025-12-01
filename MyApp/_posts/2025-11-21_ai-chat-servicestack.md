---
title: FREE Gemini, Minimax M2, GLM 4.6, Kimi K2
summary: The best OSS language models, now available for FREE in AI Chat!
tags: [llms,ai,chat,admin-ui,analytics]
author: Demis Bellot
image: https://images.unsplash.com/photo-1640011655323-a14d80feac25?crop=entropy&fit=crop&h=1000&w=2000
---

To give AI Chat instant utility, we're making available a free `servicestack` OpenAI Chat provider that can be enabled with:

```csharp
services.AddPlugin(new ChatFeature {
    EnableProviders = [
        "servicestack",
        // "groq",
        // "google_free",
        // "openrouter_free",
        // "ollama",
        // "google",
        // "anthropic",
        // "openai",
        // "grok",
        // "qwen",
        // "z.ai",
        // "mistral",
        // "openrouter",
    ]
});
```

The `servicestack` provider is configured with a default `llms.json` which enables access to Gemini and the
best value OSS models for FREE:

```json
{
  "providers": {
    "servicestack": {
      "enabled": false,
      "type": "OpenAiProvider",
      "base_url": "http://okai.servicestack.com",
      "api_key": "$SERVICESTACK_LICENSE",
      "models": {
        "gemini-flash-latest": "gemini-flash-latest",
        "gemini-flash-lite-latest": "gemini-flash-lite-latest",
        "kimi-k2": "kimi-k2",
        "kimi-k2-thinking": "kimi-k2-thinking",
        "minimax-m2": "minimax-m2",
        "glm-4.6": "glm-4.6",
        "gpt-oss:20b": "gpt-oss:20b",
        "gpt-oss:120b": "gpt-oss:120b",
        "llama4:400b": "llama4:400b",
        "mistral-small3.2:24b": "mistral-small3.2:24b"
      }
    }
  }
}
```

## Clean, Lightweight & Flexible AI Integration

ServiceStack's AI Chat delivers a production-ready solution for integrating AI capabilities into your applications with minimal overhead and maximum flexibility. The [llms.json](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.AI.Chat/chat/llms.json) configuration approach provides several key advantages:

### Unified Provider Abstraction
Define the exact models you want your application to use through a single, declarative configuration file. This thin abstraction layer eliminates vendor lock-in and allows seamless switching between providers without code changes, enabling you to:

- **Optimize for cost** - Route requests to the most economical provider for each use case
- **Maximize performance** - Leverage faster models for latency-sensitive operations while using more capable models for complex tasks
- **Ensure reliability** - Configure automatic failover between providers to maintain service availability
- **Control access** - Specify which models are available to users in your preferred priority order

### Hybrid Deployment Flexibility
Mix and match local and cloud providers to meet your specific requirements. Deploy privacy-sensitive workloads on local models while leveraging cloud providers for scale, or combine premium models for critical features with cost-effective alternatives for routine tasks.

### Zero-Dependency Architecture
The lightweight implementation adds minimal footprint to your application while providing enterprise-grade AI capabilities. No heavy SDKs or framework dependencies required—just clean, direct performant integrations.

The `servicestack` provider requires the `SERVICESTACK_LICENSE` Environment Variable, although any ServiceStack License Key can be used, including expired and Free ones.

Learn more about [AI Chat's UI](https://docs.servicestack.net/ai-chat-ui):

[![](https://servicestack.net/img/posts/ai-chat/llms-syntax.webp)](https://docs.servicestack.net/ai-chat-ui)

### FREE for Personal Usage

To be able to maintain this as a free service we're limiting usage for development or personal assistance and research
by limiting usage to **60 requests /hour** which should be more than enough for most personal usage and research whilst
deterring usage in automated tools or usage in production.

:::tip info
Rate limiting is implemented with a sliding [Token Bucket algorithm](https://en.wikipedia.org/wiki/Token_bucket)
that replenishes 1 additional request every 60s
:::

## Effortless AI Integration

In addition of providing UI and ChatGPT-like features, it also makes it trivially simple to access AI Features from within your own App that's as simple as sending a populated `ChatCompletion` Request DTO with the `IChatClient` dependency:

```csharp
class MyService(IChatClient client)
{
    public async Task<object> Any(DefaultChat request)
    {
        return await client.ChatAsync(new ChatCompletion {
            Model = "glm-4.6",
            Messages = [
                Message.Text(request.UserPrompt)
            ],
        });
    }
}
```

It's also makes it easy to send Image, Audio & Document inputs to AI Models that support it, e.g:

```csharp
var image = new ChatCompletion
{
    Model = "qwen2.5vl",
    Messages = [
        Message.Image(imageUrl:"https://example.org/image.webp",
            text:"Describe the key features of the input image"),
    ]
}

var audio = new ChatCompletion
{
    Model = "gpt-4o-audio-preview",
    Messages = [
        Message.Audio(data:"https://example.org/speaker.mp3",
            text:"Please transcribe and summarize this audio file"),
    ]
};

var file = new ChatCompletion
{
    Model = "gemini-flash-latest",
    Messages = [
        Message.File(
            fileData:"https://example.org/order.pdf",
            text:"Please summarize this document"),
    ]
};
```


## Learn more about AI Chat

To dive deeper into what AI Chat can do:

- Read the [AI Chat API docs](https://docs.servicestack.net/ai-chat-api) to integrate AI into your own services and apps.
- Explore the [AI Chat UI guide](https://docs.servicestack.net/ai-chat-ui) to customize the built-in experience.
- Use [Admin UI](https://docs.servicestack.net/ai-chat-analytics) to inspect analytics, monitor usage, and review audit history.


<div class="pt-12 not-prose flex justify-center">
<a href="https://docs.servicestack.net/ai-chat-api"
   class="group relative inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 vithe UX Hot reloading of npm UIsa-cyan-400 to-emerald-400 p-[1.5px] shadow-md">
    <span class="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition group-hover:bg-slate-50">
    <span class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 shadow-[0_0_7px_rgba(56,189,248,0.7)]"></span>
    <span class="tracking-wide">ServiceStack AI Chat</span>
    <span class="ml-1 text-slate-400 transition-transform group-hover:translate-x-0.5">&rarr;</span>
    </span>
</a>
</div>
