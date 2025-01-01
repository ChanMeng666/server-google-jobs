<div align="center">
 <h1><img src="public/server-google-jobs.svg" width="80px"><br/>Google Jobs MCP Server</h1>
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MCP-Server-blue?style=flat"/>
 <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat"/>
</div>

<br/>

A Model Context Protocol (MCP) server implementation that provides Google Jobs search capabilities via SerpAPI integration. Features multi-language support, flexible search parameters, and smart error handling.


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

# 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
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

Created and maintained by [Chan Meng](https://chanmeng.live/).
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=normal&logo=github&logoColor=white)](https://github.com/ChanMeng666)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=normal&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chanmeng666/)

