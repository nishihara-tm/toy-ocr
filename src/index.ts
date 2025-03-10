
import { Command } from "commander";
import OpenAI from "openai";

import * as dotenv from 'dotenv'
import { Client } from "@/tools/client";
import { Scraper } from "@/tools/scraper";

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
})

const getUrl = (): string => {
    const program = new Command()
    program.option("-u, --url <url>")
    program.parse()

    const options = program.opts()
    return options.url
}

export const main = async () => {
    const url = getUrl()
    const path = 'img/test.png'
    const scraper = new Scraper()
    await scraper.take_screenshot(url, path)

    const cli = new Client(client)
    console.log(cli.stream_response(path))
    await cli.stream_response(path)
}

main()