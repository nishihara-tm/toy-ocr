import OpenAI from "openai";
import * as dotenv from 'dotenv'

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

const response = await client.responses.create({
    model: "computer-use-preview",
    tools: [
        {
            type: "computer-preview",
            display_width: 1024,
            display_height: 768,
            environment: "browser"
        }
    ],
    input: [
        {
            role: "user",
            content: "今日のYoutubeのトレンドを確認して"
        }
    ],
    truncation: "auto"
})

console.log(JSON.stringify(response.output, null, 2))