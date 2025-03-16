import OpenAI from "openai";
import * as dotenv from 'dotenv'

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

const response = await client.responses.create({
    model: 'gpt-4o',
    tools: [ { type: 'web_search_preview'} ],
    input: 'NHK党の立花に何がありましたか？'
})

console.log(response)
console.log(response.output_text)