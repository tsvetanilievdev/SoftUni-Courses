let { chromium } = require('playwright-chromium');
let { expect } = require('chai');

let browser, page;
describe('E2E tests', function () {
  this.timeout(6000);
  before(async () => {
    browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('loads static page', async () => {
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'test.png' });
  });
});
