import { chromium } from "playwright";

export class Scraper {
    async take_screenshot(url: string, path: string) {
        const browser = await chromium.launch()

        const page = await browser.newPage()
        await page.goto(url)

        await page.screenshot({path})
        await browser.close()
    }
}