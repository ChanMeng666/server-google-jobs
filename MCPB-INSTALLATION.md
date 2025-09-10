# Google Jobs Server MCPB Installation Guide

## 什么是 MCPB？

MCP Bundle (MCPB) 是一种zip格式的归档文件，包含了本地MCP服务器和描述服务器功能的`manifest.json`文件。就像Chrome扩展(.crx)或VS Code扩展(.vsix)一样，MCPB使最终用户能够一键安装本地MCP服务器。

## 文件说明

- **google-jobs-server.mcpb**: 这是打包好的MCP Bundle文件
- **manifest.json**: Bundle的配置清单文件
- **dist/**: 编译后的JavaScript文件
- **node_modules/**: 项目依赖
- **server-google-jobs.svg**: Bundle图标

## 使用 Claude for macOS/Windows 安装

1. 下载 `google-jobs-server.mcpb` 文件
2. 双击或使用 Claude for macOS/Windows 打开该文件
3. 按照安装向导完成安装
4. 在环境变量中配置您的 SERP_API_KEY

## 手动安装

如果您想要手动安装，可以：

1. 解压 `google-jobs-server.mcpb` 文件
2. 将内容复制到适当的目录
3. 在您的 MCP 客户端配置中添加以下内容：

```json
{
  "google-jobs": {
    "command": "node",
    "args": ["path/to/dist/index.js"],
    "env": {
      "SERP_API_KEY": "your-serp-api-key"
    }
  }
}
```

## 环境变量配置

### 获取 SERP API Key

1. 访问 [SERP API website](https://serpapi.com/)
2. 创建账户
3. 在Dashboard中找到您的API Key
4. 新用户可获得100次免费API调用

### 配置环境变量

- **SERP_API_KEY**: 您的SerpAPI密钥（必需）

## 功能特性

- 🌍 多语言支持（英语、中文、日语、韩语）
- 🔍 灵活的搜索选项（职位、地点、薪资范围等）
- 💡 智能错误处理和搜索建议
- 📊 丰富的职位详情展示
- 🔄 分页和排序支持

## 工具说明

### search_jobs

搜索Google Jobs职位信息的工具，支持以下参数：

- `query` (必需): 搜索关键词
- `location` (可选): 工作地点
- `posted_age` (可选): 发布时间过滤
- `employment_type` (可选): 就业类型
- `salary` (可选): 薪资范围
- `radius` (可选): 搜索半径
- `hl` (可选): 结果语言
- `page` (可选): 页码
- `sort_by` (可选): 排序方式

## 故障排除

### API Key 问题
- 检查配置中的API key
- 验证API key在SERP API dashboard中的状态
- 确认API key还有剩余配额

### 搜索问题
- 验证搜索参数格式
- 检查网络连接
- 确认国家/语言代码支持

## 支持

如果您遇到任何问题，请访问：
- GitHub Repository: https://github.com/ChanMeng666/server-google-jobs
- 作者: Chan Meng (https://chanmeng.live/)

## 许可证

本项目采用 MIT 许可证。
