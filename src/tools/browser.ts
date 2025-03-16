import { chromium } from "playwright";

const browser = await chromium.launch({
    headless: true,
    chromiumSandbox: true,
    env: {},
    args: ["--disable-extensions", "--disable-file-system"],
});

const page = await browser.newPage()
await page.setViewportSize({ width: 1024, height: 768 })
await page.goto("https://bing.com")
await page.screenshot({ path: 'hoge.png'})
await page.waitForTimeout(100);

browser.close();