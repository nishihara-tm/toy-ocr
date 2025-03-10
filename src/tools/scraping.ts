import { chromium } from "playwright";

export const scrape = async (url) => {
    const browser = await chromium.launch()

    const page = await browser.newPage()
    await page.goto(url)

    const path = 'img/test.png'
    await page.screenshot({path})
    await browser.close()
}
