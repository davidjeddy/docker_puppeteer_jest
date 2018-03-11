const app = "https://www.facebook.com/";
const puppeteer = require("/usr/local/lib/node_modules/puppeteer");
const height = 1080;
const width = 1920;

let page;
let browser;

// Jest method
beforeAll(async () => {
    browser = await puppeteer.launch({
    headless: true,
    slowMo: 100,
    args: [`--window-size=${width},${height}`, `--no-sandbox`, `--disable-setuid-sandbox`]
});
page = await browser.newPage();
await page.setViewport({ width, height });
});

// Jest method
afterAll(() => {
    browser.close();
});

describe("Facebook", () => {
    test("Login view loaded.", async () => {
    await page.goto(app);
    await page.waitForSelector("#pass");
    await page.screenshot({path: './tests/_output/test_3_a.spec.png', fullPage: true});
}, 15000);
});
