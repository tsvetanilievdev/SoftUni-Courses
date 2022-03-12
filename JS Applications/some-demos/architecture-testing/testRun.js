const { expect } = require('chai');
const {chromium} = require('playwright-chromium');


(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://dsport.bg');
    await page.click('.jhmPSx')
    await page.screenshot({path: 'example.png', fullPage: true})

    let content = await page.content();
    await page.close()
})();