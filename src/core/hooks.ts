import { After, AfterAll, AfterStep, Before, Status } from "@cucumber/cucumber";
import { Browser, chromium, firefox } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser : Browser;
let worldContext: any;

Before(async function() {
    worldContext = this; 
    browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

AfterStep(async function({pickle, result}) { 
    if(result.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}`, type:"png"});
        await this.attach(img, "image/png");
    }
});

After(async (scenario) => {
    await pageFixture.page.close();
    await browser.close();
});

AfterAll(async () => {
});