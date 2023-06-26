import { chromium, test, Browser, BrowserContext, Page} from '@playwright/test';

// declare global {
//   const page: Page
//   ,context: BrowserContext
//   ,browser: Browser
//   ,browserName: string;
// }


let browser;
let context;
let page;

test.beforeAll(async () => {
  // browser = await chromium.launch();
  // context = await browser.newContext();
  // page = await context.newPage();
});

// test.afterAll(async () => {
//   // await page.close();
//   // await context.close();
//   // await browser.close();
// });

export { page };

