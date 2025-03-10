
import { llm } from "@/tools/client";
import { scrape } from "@/tools/scraping";
import { Command } from "commander";



const getUrl = (): string => {
    const program = new Command()
    program.option("-u, --url <url>")
    program.parse()

    const options = program.opts()
    return options.url
}

export const main = async () => {
    const url = getUrl()
    await scrape(url)
    await llm()
}

main()