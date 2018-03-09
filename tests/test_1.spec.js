import puppeteer from "puppeteer";

const APP = "https://www.sourcetoad.com/contact/";
const width = 1920;
const height = 1080;

let page;
let browser;

// Jest method
beforeAll(async () => {
    browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
});
page = await browser.newPage();
await page.setViewport({ width, height });
});

// Jest method
afterAll(() => {
    browser.close();
});

describe("Contact form", () => {
    test("", async () => {
    await page.goto(APP);
    await page.waitForSelector("#padding-4");
    await page.click('#wpforms-submit-11699')
    await page.screenshot({path: './tests/_output/test_1.spec.png', fullPage: true});
}, 4000);
});