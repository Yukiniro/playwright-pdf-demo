// @ts-check
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://zhanghao.zone');
  await page.pdf({ path: `document.pdf` });
  await browser.close();
})();