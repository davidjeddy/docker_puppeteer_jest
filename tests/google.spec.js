const app = "https://www.google.com/";
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

describe("Let Me ...", () => {
    test("... Google That For You.", async () => {
    await page.goto(app);
    await page.waitForSelector("#lst-ib");
    await page.screenshot({path: './tests/_output/test_1_a.spec.png', fullPage: true});
    await page.type("#lst-ib", 'Let Me Google That For You');
    await page.screenshot({path: './tests/_output/test_1_b.spec.png', fullPage: true});
    await page.click('#sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input')
    await page.waitForSelector("#pnnext > span.csb.ch");
    await page.screenshot({path: './tests/_output/test_1_c.spec.png', fullPage: true});
}, 15000);
});
