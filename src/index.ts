#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fetch from "node-fetch";
import type { Response } from "node-fetch";

// Check API key
const SERP_API_KEY = process.env.SERP_API_KEY;
if (!SERP_API_KEY) {
  console.error("Error: SERP_API_KEY environment variable is required");
  process.exit(1);
}

// Define supported languages
type SupportedLanguage = "en" | "zh-CN" | "ja" | "ko";

// Language localization
const localizations = {
  "en": {
    statistics: "Search Statistics",
    totalFound: "Total Found",
    currentPage: "Current Page",
    searchTime: "Search Time",
    seconds: "seconds",
    pageHint: "pages of results. Use 'page' parameter to view more",
    noResults: "No matching jobs found",
    suggestions: "Suggestions",
    position: "Position",
    company: "Company",
    location: "Location",
    postTime: "Posted",
    jobType: "Job Type",
    salary: "Salary Range",
    highlights: "Job Highlights",
    benefits: "Company Benefits",
    description: "Job Description",
    applyLink: "Apply Link",
    unspecified: "Unspecified",
    noDescription: "No description available",
    noApplyLink: "No direct apply link",
    warning: "Warning",
    error: "Error",
    searchTips: "Search Tips"
  },
  "zh-CN": {
    statistics: "搜索结果统计",
    totalFound: "总计找到",
    currentPage: "当前页码",
    searchTime: "搜索用时",
    seconds: "秒",
    pageHint: "页结果，可通过设置 page 参数查看更多",
    noResults: "未找到匹配的职位",
    suggestions: "建议",
    position: "职位",
    company: "公司",
    location: "地点",
    postTime: "发布时间",
    jobType: "工作类型",
    salary: "薪资范围",
    highlights: "工作亮点",
    benefits: "公司福利",
    description: "职位描述",
    applyLink: "申请链接",
    unspecified: "未指定",
    noDescription: "暂无描述",
    noApplyLink: "无直接申请链接",
    warning: "提示",
    error: "搜索出错",
    searchTips: "搜索建议"
  },
  "ja": {
    statistics: "検索統計",
    totalFound: "検索結果数",
    currentPage: "現在のページ",
    searchTime: "検索時間",
    seconds: "秒",
    pageHint: "ページの結果があります。pageパラメータで他のページを表示できます",
    noResults: "該当する求人が見つかりません",
    suggestions: "提案",
    position: "職位",
    company: "会社",
    location: "勤務地",
    postTime: "掲載日",
    jobType: "雇用形態",
    salary: "給与",
    highlights: "仕事の特徴",
    benefits: "福利厚生",
    description: "職務内容",
    applyLink: "応募リンク",
    unspecified: "未指定",
    noDescription: "説明なし",
    noApplyLink: "直接応募リンクなし",
    warning: "警告",
    error: "エラー",
    searchTips: "検索のヒント"
  },
  "ko": {
    statistics: "검색 통계",
    totalFound: "검색 결과 수",
    currentPage: "현재 페이지",
    searchTime: "검색 시간",
    seconds: "초",
    pageHint: "페이지의 결과가 있습니다. page 매개변수로 다른 페이지를 볼 수 있습니다",
    noResults: "일치하는 채용 공고를 찾을 수 없습니다",
    suggestions: "제안",
    position: "직위",
    company: "회사",
    location: "근무지",
    postTime: "게시일",
    jobType: "고용 형태",
    salary: "급여",
    highlights: "직무 특징",
    benefits: "복리후생",
    description: "직무 설명",
    applyLink: "지원 링크",
    unspecified: "미지정",
    noDescription: "설명 없음",
    noApplyLink: "직접 지원 링크 없음",
    warning: "경고",
    error: "오류",
    searchTips: "검색 팁"
  }
} as const;

// Define search tool
const SEARCH_JOBS_TOOL = {
  name: "search_jobs",
  description: `Google Jobs API search tool.

Supported search parameters:
1. Basic Search: Job title or keywords
2. Location: City or region
3. Time Filter: Recently posted jobs
4. Job Type: Full-time, part-time, contract, internship
5. Salary Range: Filter by compensation
6. Geographic Range: Set search radius
7. Language: Multi-language support

All parameters except 'query' are optional and can be freely combined.`,
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search keywords (Required, e.g., 'software engineer', 'data analyst', 'product manager')"
      },
      location: {
        type: "string",
        description: "Job location (Optional, e.g., 'New York', 'London', 'Tokyo')",
        default: ""
      },
      posted_age: {
        type: "string",
        description: `Posting date filter (Optional)
Options:
- "today": Posted today
- "3days": Last 3 days
- "week": Last week
- "month": Last month`,
        default: ""
      },
      employment_type: {
        type: "string",
        description: `Job type (Optional)
Options:
- "FULLTIME": Full-time
- "PARTTIME": Part-time
- "CONTRACTOR": Contractor
- "INTERN": Internship
- "TEMPORARY": Temporary`,
        default: ""
      },
      salary: {
        type: "string",
        description: `Salary range (Optional)
Format examples:
- "$50K+": Above $50,000
- "$100K+": Above $100,000
- "$150K+": Above $150,000`,
        default: ""
      },
      radius: {
        type: "string",
        description: `Search radius (Optional)
Format examples:
- "10mi": Within 10 miles
- "20mi": Within 20 miles
- "50mi": Within 50 miles`,
        default: ""
      },
      hl: {
        type: "string",
        description: `Result language (Optional)
Options:
- "en": English
- "zh-CN": Chinese
- "ja": Japanese
- "ko": Korean`,
        default: "en"
      },
      page: {
        type: "number",
        description: `Page number (Optional, default: 1)
- 10 results per page
- Supports pagination`,
        default: 1
      },
      sort_by: {
        type: "string",
        description: `Sort order (Optional)
Options:
- "date": Sort by date
- "relevance": Sort by relevance
- "salary": Sort by salary`,
        default: "relevance"
      }
    },
    required: ["query"]
  }
};

// 服务器实例
const server = new Server({
  name: "google-jobs-search",
  version: "0.1.0",
}, {
  capabilities: {
    tools: {}
  }
});

// Get localized text based on language
function getLocalizedText(lang: SupportedLanguage = "en") {
  return localizations[lang] || localizations["en"];
}

// Smart error handling with localization
function getSearchSuggestions(error: any, query: string, lang: SupportedLanguage = "en"): string {
  const t = getLocalizedText(lang);
  let suggestions = `\n💡 ${t.searchTips}:\n`;
  
  if (error.message.includes("API error: 429")) {
    return suggestions + "API rate limit exceeded. Please try again later.";
  }

  if (error.message.includes("Invalid location")) {
    suggestions += `• Location input might be incorrect, try:\n`;
    suggestions += `  - Using standard location names (e.g., "New York" instead of "NY")\n`;
    suggestions += `  - Checking spelling\n`;
    return suggestions;
  }

  // Provide suggestions based on query content
  if (query.length > 100) {
    suggestions += `• Search query too long, consider shortening\n`;
  }
  
  if (query.includes("&") || query.includes("|")) {
    suggestions += `• Avoid special characters, use plain text\n`;
  }

  suggestions += `• Try using more general job titles\n`;
  suggestions += `• Reduce filter conditions\n`;
  suggestions += `• Expand search area or try different location\n`;
  
  return suggestions;
}

// Parameter validation with localization
function validateSearchParams(args: any, lang: SupportedLanguage = "en"): string[] {
  const t = getLocalizedText(lang);
  const warnings: string[] = [];
  
  if (args.location && args.location.length < 2) {
    warnings.push("Location name too short, please enter complete location name");
  }
  
  if (args.salary && !args.salary.includes("$") && !args.salary.includes("K")) {
    warnings.push("Invalid salary format, use format like '$50K+'");
  }
  
  if (args.radius && !args.radius.endsWith("mi")) {
    warnings.push("Invalid radius format, use format like '20mi'");
  }
  
  return warnings;
}

// Format search results with localization
function formatJobResults(jobs: any[], metadata: any, page: number = 1, lang: SupportedLanguage = "en") {
  const t = getLocalizedText(lang);
  
  let output = `📊 ${t.statistics}\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  output += `🔍 ${t.totalFound}: ${metadata.total_results || t.unspecified}\n`;
  output += `📄 ${t.currentPage}: ${page}\n`;
  output += `⏱️ ${t.searchTime}: ${metadata.total_time_taken || t.unspecified} ${t.seconds}\n\n`;

  if (metadata.total_results > 10) {
    output += `💡 ${Math.ceil(metadata.total_results/10)} ${t.pageHint}\n\n`;
  }

  if (jobs.length === 0) {
    output += `❌ ${t.noResults}\n`;
    output += `${t.suggestions}:\n`;
    output += `1. Try more general keywords\n`;
    output += `2. Reduce filters\n`;
    output += `3. Expand search area\n`;
    return output;
  }

  return output + jobs.map((job, index) => {
    const extensions = job.detected_extensions || {};
    const highlights = job.job_highlights || [];
    const benefits = extensions.benefits || [];
    
    let jobOutput = `\n💼 ${t.position} #${index + 1}\n`;
    jobOutput += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    jobOutput += `📋 ${t.position}: ${job.title}\n`;
    jobOutput += `🏢 ${t.company}: ${job.company_name}\n`;
    jobOutput += `📍 ${t.location}: ${job.location || t.unspecified}\n`;
    jobOutput += `🕒 ${t.postTime}: ${extensions.posted_at || t.unspecified}\n`;
    jobOutput += `👔 ${t.jobType}: ${extensions.schedule_type || t.unspecified}\n`;
    
    if (extensions.salary_range) {
      jobOutput += `💰 ${t.salary}: ${extensions.salary_range}\n`;
    }
    
    if (highlights.length > 0) {
      jobOutput += `\n✨ ${t.highlights}:\n`;
      highlights.forEach((highlight: any) => {
        jobOutput += `• ${highlight.title}:\n`;
        highlight.items.forEach((item: string) => {
          jobOutput += `  - ${item}\n`;
        });
      });
    }
    
    if (benefits.length > 0) {
      jobOutput += `\n🎁 ${t.benefits}:\n`;
      benefits.forEach((benefit: string) => {
        jobOutput += `• ${benefit}\n`;
      });
    }
    
    jobOutput += `\n📝 ${t.description}:\n${job.description || t.noDescription}\n`;
    
    if (job.apply_options?.[0]?.link) {
      jobOutput += `\n🔗 ${t.applyLink}:\n${job.apply_options[0].link}\n`;
    }
    
    jobOutput += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    return jobOutput;
  }).join('\n');
}

// Interface definitions
interface JobSearchResponse {
  jobs_results?: any[];
  search_metadata?: {
    total_results?: number;
    total_time_taken?: number;
  };
  page?: number;
}

// Perform job search
async function performJobSearch(
  query: string, 
  location?: string, 
  posted_age?: string,
  employment_type?: string,
  salary?: string,
  radius?: string,
  hl?: SupportedLanguage
) {
  // Parameter validation
  const warnings = validateSearchParams({
    query,
    location,
    salary,
    radius
  }, hl);
  
  let output = "";
  if (warnings.length > 0) {
    const t = getLocalizedText(hl);
    output += `⚠️ ${t.warning}:\n`;
    warnings.forEach(warning => {
      output += `• ${warning}\n`;
    });
    output += `\n`;
  }

  // Build search URL
  const url = new URL('https://serpapi.com/search');
  url.searchParams.set('engine', 'google_jobs');
  url.searchParams.set('q', query);
  url.searchParams.set('api_key', SERP_API_KEY as string);
  
  // Add basic parameters
  if (location) {
    url.searchParams.set('location', location);
  }
  
  if (posted_age) {
    url.searchParams.set('chips', `date_posted:${posted_age}`);
  }

  // Add additional parameters
  if (employment_type) {
    url.searchParams.append('chips', `employment_type:${employment_type}`);
  }

  if (salary) {
    url.searchParams.append('chips', `salary:${salary}`);
  }

  if (radius) {
    url.searchParams.set('location_distance', radius);
  }

  if (hl) {
    url.searchParams.set('hl', hl);
  }

  // Make API request
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Serp API error: ${response.status} ${response.statusText}`);
  }

  // Process response
  const data = await response.json() as JobSearchResponse;
  return output + formatJobResults(
    data.jobs_results || [], 
    data.search_metadata || {}, 
    data.page || 1,
    hl
  );
}

// Update request handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [SEARCH_JOBS_TOOL]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;
    
    if (name !== "search_jobs") {
      throw new Error("Unknown tool");
    }

    if (!args || typeof args.query !== "string") {
      throw new Error("Invalid arguments for search_jobs");
    }

    const results = await performJobSearch(
      args.query,
      args.location as string | undefined,
      args.posted_age as string | undefined,
      args.employment_type as string | undefined,
      args.salary as string | undefined,
      args.radius as string | undefined,
      args.hl as SupportedLanguage | undefined
    );

    return {
      content: [{ type: "text", text: results }],
      isError: false
    };
  } catch (error) {
    const args = request.params.arguments as { query?: string; hl?: SupportedLanguage } | undefined;
    const query = args?.query || "";
    const lang = args?.hl || "en";
    const t = getLocalizedText(lang);
    const suggestions = getSearchSuggestions(error, query, lang);
    
    return {
      content: [{ 
        type: "text", 
        text: `❌ ${t.error}:\n${error instanceof Error ? error.message : String(error)}\n${suggestions}` 
      }],
      isError: true
    };
  }
});

// Server startup
async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Google Jobs Search MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
