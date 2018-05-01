const app = "https://www.google.com/";
const puppeteer = require("../node_modules/puppeteer");
const height = 1080;
const width = 1920;
const path = './tests/_output/';

let page;
let browser;

var debug = false;

// Jest method
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: ( debug === true ? false : true),
        slowMo: ( debug === true ? 100 : 0),
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
        await page.screenshot({path: path+'test_1_a.spec.png', fullPage: true});
        await page.type("#lst-ib", 'Let Me Google That For You');
        await page.screenshot({path: path+'test_1_b.spec.png', fullPage: true});
        await page.click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');
        await page.waitForSelector("#pnnext > span.csb.ch");
        await page.screenshot({path: path+'test_1_c.spec.png', fullPage: true});
    });
});
