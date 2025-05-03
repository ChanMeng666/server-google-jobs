//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const search_jobsEval: EvalFunction = {
    name: "search_jobsEval",
    description: "Evaluates the jobs search functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Find me data analyst jobs in Tokyo posted this week with at least a $100K salary.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [search_jobsEval]
};
  
export default config;
  
export const evals = [search_jobsEval];