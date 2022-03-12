const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;
//IIFE
describe('Accordion tests', function () {
  this.timeout(10000);

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

  // it('Should load trainers page', async () => {
  //   await page.goto('https://softuni.bg/');
  //   await page.click('text=Преподаватели');

  //   let heading = await page.textContent(
  //     '.trainers-page-content-header-info-title'
  //   );

  //   expect(heading.trim()).to.be.equal('Преподаватели');

  //   await browser.close();
  // });

  it('static page test', async () => {
    await page.goto('http://localhost:3000');
    
    const content = await page.textContent('.accordion .head span');
    expect(content).to.contains('Scalable Vector Graphics');
  })

  it('after click more, p is visible', async () => {
    await page.goto('http://localhost:3000');
    await page.click('#main>.accordion:first-child >> text=More');
    await page.waitForSelector('#main>.accordion:first-child >> .extra p');
    const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
    expect(visible).to.be.true;
  })

  it('after click on less button, p is NOT visible', async () => {
    await page.goto('http://localhost:3000');
    await page.click('#main>.accordion:first-child >> text=More');
    await page.waitForSelector('#main>.accordion:first-child >> .extra p');
    await page.click('#main>.accordion:first-child >> text=Less');

    const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
    expect(visible).to.be.false;
  })


});
