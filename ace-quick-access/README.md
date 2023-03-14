# ace-quick-access

## Summary

Short summary on functionality and used technologies.

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16.1-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Installation

# Install the Solution Package

## Create the Quick Access Links List

### Create the Quick Access Links List using Powerhell

**Before you Begin**
- Ensure you have [PnP.PowerShell](https://pnp.github.io/powershell/articles/installation.html) installed.
- Download the [Create-List.ps1](https://github.com/TylerDurham/st-viva-connections-extensions/blob/master/ace-quick-access/sharepoint/Create-List.ps1) script to your local machine.

Navigate to the folder you downloaded [Create-List.ps1] and run the following command:

```
.\Create-List.ps1 -SiteURL <your-site-url>
```

### Create the Quick Access Links List Manually

<ol>
<li>Open Microsoft Lists</li>
<li>Under *Create a List*, select *Blank List*.</li>
</ol>

You can create the SharePoint list manually if needed, but it is recommended to use the [Create-List.ps1] PowerShell script. Make sure you create the columns *exactly* as specified in the table below.

| Column        | Type                    | Notes                                         |
| -----------   | -------------------     | --------------------------------------------- |
| Title         | Single Line of Text     | The title of the link. You won't need to create this, as SharePoint creates a *Title* column by default. Just insure it's there.
| Subtitle      | Single Line of Text     | The subtitle of the link. Can be used as a "call to action". |
| Description   | Multiple Lines of Text  | A brief description of the link. |
| LaunchURL     | Hyperlink or Picture    | The URL for the link. Make sure the format is "Hyperlink". |        
| ThumbnailURL  | Thumbnail               | A picture that will be used for the link. |     
| SortOrder     | Number                  | The sort order for the link when displayed in the ACE. Sort order is descending. |

## Solution

| Solution    | Author(s)                                               |
|-------------|---------------------------------------------------------|
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
|---------|------------------|-----------------|
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Provision SharePoint assets from your SharePoint client-side web part](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/provision-sp-assets-from-package)

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development

[Create-List.ps1]: https://github.com/TylerDurham/st-viva-connections-extensions/blob/master/ace-quick-access/sharepoint/Create-List.ps1
