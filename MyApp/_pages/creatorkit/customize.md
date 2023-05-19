---
title: Customize
order: 3
---

The `/emails` folder contains all email templates and layouts made available to CreatorKit:

<div data-component="FileLayout" data-props="{
    files: {
        emails: { 
            layouts:  { _: ['basic.html','empty.html','marketing.html'] },
            partials: { _: ['button-centered.html','divider.html','image-centered.html','section.html','title.html'] },
            vars:     { _: ['info.txt','urls.txt'] },
            _:        ['empty.html','newsletter-welcome.html','newsletter.html','verify-email.html'] 
        }
    }
}"></div>

Which uses the [#Script](https://sharpscript.net) .NET Templating language to render Emails from Templates, where:

 - `/layouts` contains different kinds of email layouts
 - `/partials` contains all reusable [Partials](https://sharpscript.net/docs/partials) made available to your templates
 
The remaining `*.html` contains different type of emails you want to send, e.g. **empty.html** is a blank
template you can use to send custom Markdown email content with the your preferred email layout.

## Template Variables

All Branding Information referenced in the templates are maintained in the `/vars` folder:

<div data-component="FileLayout" data-props="{ files: { vars: { _: ['info.txt','urls.txt'] } } }"></div>

At a minimum you'll want to replace all **info.txt** variables from ServiceStack's with your Organization's information:

#### info.txt

```txt
Company           ServiceStack
CompanyOfficial   ServiceStack, Inc.
Domain            servicestack.net
MailingAddress    470 Schooleys Mt Road #636, Hackettstown, NJ 07840-4096
MailPreferences   Mail Preferences
Unsubscribe       Unsubscribe
Contact           Contact
Privacy           Privacy policy
OurAddress        Our mailing address:
MailReason        You received this email because you are subscribed to ServiceStack news and announcements.
SignOffTeam       The ServiceStack Team
NewsletterFmt     ServiceStack Newsletter, {0}
SocialUrls        Website,Twitter,YouTube
SocialImages      website_24x24,twitter_24x24,youtube_24x24
```

`{{info.Company}}`

The **urls.txt** contains all URLs embedded in emails that you'll want to replace with URLs on your website, with 
`/mail-preferences` and `/signup-confirmed` being integration pages covered in [Integrations](./integrations).

#### urls.txt

```txt
BaseUrl           {{BaseUrl}}
AppBaseUrl        {{AppBaseUrl}}
PublicAppBaseUrl  {{PublicAppBaseUrl}}
Website           {{BaseUrl}}
MailPreferences   {{BaseUrl}}/mail-preferences
Unsubscribe       {{BaseUrl}}/mail-preferences
Privacy           {{BaseUrl}}/privacy
Contact           {{BaseUrl}}/#contact
SignupConfirmed   {{BaseUrl}}/signup-confirmed
Twitter           https://twitter.com/ServiceStack
YouTube           https://www.youtube.com/channel/UC0kXKGVU4NHcwNdDdRiAJSA
```

 - **BaseUrl** - Base URL of your Website that uses CreatorKit
 - **AppBaseUrl** - Base URL of the current CreatorKit instance
 - **PublicAppBaseUrl** - Base URL of a public CreatorKit instance

The **PublicAppBaseUrl** is used to reference public images hosted on your deployed CreatorKit instance since most email
clients wont render images hosted on `https://localhost`.

### Usage

You're free to add to these existing collections or create new variable collections which  are accessible from 
`{{info.*}}` and `{{urls.*}}` in your templates that's also available via dropdown in the Markdown Editor Variables
dropdown:

![](/img/pages/creatorkit/markdown-vars.png)

In addition, a `{{images.*}}` variable collection is also populated from all images in the `/img/mail` folder, e.g:

<div data-component="FileLayout" data-props="{ files: { 
    img: {
        mail: { _: [
            'blog_48x48@2x.png',
            'chat_48x48@2x.png',
            'email_100x100@2x.png',
            'logo_72x72@2x.png',
            'logofull_350x60@2x.png',
            'mail_48x48@2x.png',
            'speaker_48x48@2x.png',
            'twitter_24x24@2x.png',
            'video_48x48@2x.png',
            'website_24x24@2x.png',
            'welcome_650x487.jpg',
            'youtube_24x24@2x.png',
            'youtube_48x48@2x.png'
            ]
        }
    } } 
}"></div>

That's prefixed with the `{{PublicAppBaseUrl}}` allowing them to be referenced directly in your `*.html` Email templates:  

```html
<img src="{{images.welcome_650x487.jpg}}">
```

Or from your Markdown Emails using Markdown Image syntax:

```markdown
![]({{images.welcome_650x487.jpg}})
```

## Mailing Lists

The Mailing Lists contacts can subscribe to are maintained in the `MailingList` enum which you can modify with all
the different mailing lists you want your users to be able to subscribe to:

```csharp
[Flags]
public enum MailingList
{
    None = 0,
    [Description("Test Group")]
    TestGroup         = 1 << 0,     //1
    [Description("Monthly Newsletter")]
    MonthlyNewsletter = 1 << 1,     //2
    [Description("New Blog Posts")]
    BlogPostReleases  = 1 << 2,     //4
    [Description("New Videos")]
    VideoReleases     = 1 << 3,     //8
    [Description("New Product Releases")]
    ProductReleases   = 1 << 4,     //16
    [Description("Yearly Updates")]
    YearlyUpdates     = 1 << 5,     //32
}
```

As this is a `[Flags]` enum any new entries should increase by a power of 2 so all mailing lists contacts are subscribed
to can be captured in a single integer value.