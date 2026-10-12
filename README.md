<div align="center">

<img src="./public/server-google-jobs.svg" width="80" alt="">

# Google Jobs MCP Server

### Job search for your AI assistant.

Ask Claude to find jobs. It searches Google Jobs and answers with real listings, each with a link to apply.

<a href="https://www.npmjs.com/package/@chanmeng666/google-jobs-server"><img src="./.github/readme/pill-npm.svg" height="40" alt="npm"></a> <a href="https://serpapi.com/"><img src="./.github/readme/pill-get-a-serpapi-key.svg" height="40" alt="Get a SerpApi key"></a> <a href="docs/overview.md"><img src="./.github/readme/pill-full-overview.svg" height="40" alt="Full overview"></a>

</div>

<br>

https://github.com/user-attachments/assets/8f6739e1-7db7-4171-88b4-59c6290a4c72

<br>

## Try it

Get a key from [SerpApi](https://serpapi.com/), then add this to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "google-jobs": {
      "command": "npx",
      "args": ["-y", "@chanmeng666/google-jobs-server"],
      "env": { "SERP_API_KEY": "your-api-key" }
    }
  }
}
```

Restart Claude and ask:

> *Find full-time data analyst jobs in Tokyo posted this week.*

## Why use it

- **One tool to learn.** `search_jobs` needs only a query. Add a location, radius, posting date, job type or salary to narrow it.
- **Whole listings, not just titles.** Each result has the company, location, posting time, job type, description and apply link, plus salary and benefits when the listing has them.
- **Four languages.** Results can be labelled in English, Chinese, Japanese or Korean.

```mermaid
flowchart LR
    Q([Your request]) --> C[Claude calls<br/>search_jobs]
    C --> S[SerpApi<br/>Google Jobs]
    S --> F[Server formats<br/>each listing]
    F --> A([Answer with<br/>apply links])
```

## For your agent

This page is all a person needs. Everything else is written for agents: clone the repo and point yours at [`llms.txt`](llms.txt) and [`docs/overview.md`](docs/overview.md).

```bash
git clone https://github.com/ChanMeng666/server-google-jobs
```

<sub>[Full overview](docs/overview.md) · [MCPB install guide](MCPB-INSTALLATION.md) · [Changelog](CHANGELOG.md) · [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) · [MIT](LICENSE)</sub>

<sub>See also: [Google News MCP Server](https://github.com/ChanMeng666/server-google-news). Built by [Chan Meng](https://github.com/ChanMeng666).</sub>
