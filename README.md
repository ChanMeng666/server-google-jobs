[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/chanmeng666-server-google-jobs-badge.png)](https://mseep.ai/app/chanmeng666-server-google-jobs)

<div align="center">
 <h1><img src="public/server-google-jobs.svg" width="80px"><br/>Google Jobs MCP Server</h1>
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MCP-Server-blue?style=flat"/>
 <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat"/>
<a href="https://smithery.ai/server/@chanmeng666/google-jobs-server"><img alt="Smithery Badge" src="https://smithery.ai/badge/@chanmeng666/google-jobs-server"></a>
</div>

<br/>

A Model Context Protocol (MCP) server implementation that provides Google Jobs search capabilities via SerpAPI integration. Features multi-language support, flexible search parameters, and smart error handling.

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ChanMeng666/server-google-jobs)

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/chanmeng666-server-google-jobs-badge.png)](https://mseep.ai/app/chanmeng666-server-google-jobs)
[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/df679562-50ad-4615-ac3c-a509c27583f0)

<a href="https://glama.ai/mcp/servers/bijbpfhrbx">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/bijbpfhrbx/badge" alt="Google Jobs Server MCP server" />
</a>

<br/>

[![👉Try It Now!👈](https://gradient-svg-generator.vercel.app/api/svg?text=%F0%9F%91%89Try%20It%20Now!%F0%9F%91%88&color=000000&height=60&gradientType=radial&duration=6s&color0=ffffff&template=pride-rainbow)](https://smithery.ai/server/@chanmeng666/google-jobs-server)

<br/>

https://github.com/user-attachments/assets/8f6739e1-7db7-4171-88b4-59c6290a4c72

![屏幕截图 2024-12-31 183813](https://github.com/user-attachments/assets/fd02f916-7ba0-4d92-8970-79ccecdb1115)

![屏幕截图 2024-12-31 183754](https://github.com/user-attachments/assets/22f497f5-381e-40d1-b082-d13d13239677)

![屏幕截图 2024-12-31 180734](https://github.com/user-attachments/assets/19f74219-5059-4c49-95e9-3a1741d866d2)

![屏幕截图 2024-12-31 182106](https://github.com/user-attachments/assets/5e88ec38-66cd-4f02-95b3-118007736dbd)


# ✨ Features

### 🌍 Multi-Language Support
Full localization support for English, Chinese, Japanese and Korean with automatic language detection and fallback.

### 🔍 Flexible Search Options
Comprehensive search parameters including:
- Job title and keywords
- Location with radius filtering
- Employment type (full-time, part-time, etc.)
- Salary range filters
- Post date filtering
- Results sorting

### 💡 Smart Error Handling
- Comprehensive input validation
- Helpful error messages and suggestions
- Automatic search refinement suggestions
- Rate limit handling

### 📊 Rich Job Details
- Detailed job information formatting
- Company benefits and highlights
- Salary information when available
- Direct application links
- Job posting timestamps

### 🔄 Advanced Features
- Pagination support
- Multiple sorting options
- Geographic radius search
- Employment type filtering

# 🔑 SERP API Setup Guide

Before getting started, you'll need to obtain a SERP API key:

1. Visit [SERP API website](https://serpapi.com/) and create an account

2. After registration, go to your Dashboard:
   - Locate the "API Key" section
   - Copy your API key
   - New users get 100 free API calls

3. API Usage Details:
   - Free tier: 100 searches per month
   - Paid plans start at $50/month for 5000 searches
   - Billing based on successful API calls
   - Multiple payment methods: Credit Card, PayPal, etc.

4. Usage Limits:
   - Request Rate: 2 requests/second
   - IP Restrictions: None
   - Concurrent Requests: 5
   - Response Cache Time: 1 hour

# 👩‍🔧 Solution for MCP Servers Connection Issues with NVM/NPM

Click to view my configuration solution 👉 https://github.com/modelcontextprotocol/servers/issues/76

# 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Modify your `claude_desktop_config.json` with the following content (adjust paths according to your system):
```json
{
  "google-jobs": {
    "command": "D:\\Program\\nvm\\node.exe",
    "args": ["D:\\github_repository\\path_to\\dist\\index.js"],
    "env": {
      "SERP_API_KEY": "your-api-key"
    }
  }
}
```

3. Build the server:
```bash
npm run build
```

4. Start the server:
```bash
npm start
```

## Troubleshooting

1. API Key Issues:
- Verify key in configuration
- Check key status in SERP API dashboard
- Confirm key has remaining quota

2. Search Issues:
- Validate search parameters format
- Check network connectivity
- Verify country/language code support

# 📦 Installation

## Installing via Smithery

To install Google Jobs for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@chanmeng666/google-jobs-server):

```bash
npx -y @smithery/cli install @chanmeng666/google-jobs-server --client claude
```

## Manual Installation

<img src="https://cdn.simpleicons.org/npm/CB3837" height="14"/> <a href="https://www.npmjs.com/package/@chanmeng666/google-jobs-server">@chanmeng666/google-jobs-server</a>

```bash
# Using npm
npm i @chanmeng666/google-jobs-server
# or
npm install @chanmeng666/google-jobs-server

# Using yarn
yarn add @chanmeng666/google-jobs-server

# Using pnpm
pnpm add @chanmeng666/google-jobs-server
```



## Running evals

The evals package loads an mcp client that then runs the index.ts file, so there is no need to rebuild between tests. You can load environment variables by prefixing the npx command. Full documentation can be found [here](https://www.mcpevals.io/docs).

```bash
OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
```
# 💻 Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)

# 📖 API Documentation

The server implements the Model Context Protocol and exposes a job search tool with the following parameters:

- `query`: Search query string (required)
- `location`: Job location (optional)
- `posted_age`: Post date filter (optional)
- `employment_type`: Job type filter (optional)
- `salary`: Salary range filter (optional)
- `radius`: Geographic search radius (optional)
- `hl`: Language code (optional)
- `page`: Pagination number (optional)
- `sort_by`: Sort order (optional)

# 🔧 Development

```bash
# Run in development mode
npm run dev

# Run type checking
npm run typecheck

# Build for production
npm run build
```

# 📝 License

This project is [MIT licensed](./LICENSE).

# 🙋‍♀ Author

Created and maintained by [Chan Meng](https://chanmeng.org/).
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=normal&logo=github&logoColor=white)](https://github.com/ChanMeng666)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=normal&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chanmeng666/)

<details>
<summary>🤖 AI Assistant Integration & GEO Optimization</summary>

## AI Assistant Usage Guide

This MCP server is optimized for AI assistant integration. AI assistants can use this tool through the following methods:

### Quick Start for AI
1. **Installation**: `npm install @chanmeng666/google-jobs-server`
2. **Configuration**: Add server configuration to MCP client
3. **Usage**: Call the `search_jobs` tool for job searching

### Search Parameters for AI
- `query`: Search keywords (required)
- `location`: Job location
- `posted_age`: Post date filter (today, 3days, week, month)
- `employment_type`: Job type (FULLTIME, PARTTIME, CONTRACTOR, INTERN)
- `salary`: Salary range (e.g., $50K+, $100K+)
- `radius`: Search radius (e.g., 10mi, 20mi, 50mi)
- `hl`: Language code (en, zh-CN, ja, ko)
- `page`: Page number (10 results per page)
- `sort_by`: Sort order (date, relevance, salary)

### AI Use Cases
- Help users find specific job positions
- Provide multi-language job search capabilities
- Filter job opportunities based on criteria
- Retrieve detailed job information and application links

### Error Handling for AI
The system provides intelligent error prompts and search suggestions to help optimize search parameters.

## Structured Data for AI Crawlers

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Google Jobs MCP Server",
  "description": "A powerful MCP server for searching Google Jobs via SerpAPI with multi-language support",
  "url": "https://github.com/ChanMeng666/server-google-jobs",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Node.js",
  "programmingLanguage": "TypeScript",
  "author": {
    "@type": "Person",
    "name": "Chan Meng",
    "url": "https://chanmeng.org/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Multi-language support (English, Chinese, Japanese, Korean)",
    "Flexible search parameters",
    "Smart error handling",
    "Rich job details formatting",
    "Pagination support",
    "Geographic radius search"
  ],
  "softwareVersion": "1.0.0",
  "datePublished": "2024-12-31",
  "license": "MIT",
  "keywords": [
    "google-jobs",
    "job-search",
    "mcp-server",
    "serpapi",
    "typescript",
    "careers",
    "employment"
  ]
}
</script>

## AI Crawler Instructions

<script type="text/llms.txt">
## AI Assistant Usage Guide

This is a Google Jobs MCP Server project. AI assistants can use it in the following ways:

### Quick Start
1. Install: npm install @chanmeng666/google-jobs-server
2. Configure: Add server configuration to MCP client
3. Use: Call search_jobs tool for job searching

### Search Parameter Guide
- query: Search keywords (required)
- location: Job location
- posted_age: Post date filter (today, 3days, week, month)
- employment_type: Job type (FULLTIME, PARTTIME, CONTRACTOR, INTERN)
- salary: Salary range (e.g., $50K+, $100K+)
- radius: Search radius (e.g., 10mi, 20mi, 50mi)
- hl: Language code (en, zh-CN, ja, ko)
- page: Page number (10 results per page)
- sort_by: Sort order (date, relevance, salary)

### Use Cases
- Help users find specific job positions
- Provide multi-language job search capabilities
- Filter job opportunities based on criteria
- Retrieve detailed job information and application links

### Error Handling
The system provides intelligent error prompts and search suggestions to help optimize search parameters.
</script>

</details>

