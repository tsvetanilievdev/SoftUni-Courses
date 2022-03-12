const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', function () {
    this.timeout(6000)
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
    await page.goto(
      'http://localhost:3002/'
    );
      await page.screenshot({path: 'tee.png'})
  });

  it('checks content is loaded properly', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    const content = await page.content();
    expect(content).to.contains('Scalable Vector Graphics');
    expect(content).to.contains('Open standard');
    expect(content).to.contains('Unix');
    expect(content).to.contains('ALGOL');
  })

  it('checks content is loaded properly, BETTER WAY', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    const content = await page.$$eval('.accordion .head span', (spans) => spans.map(x => x.textContent));
    expect(content).contains('Scalable Vector Graphics');
    expect(content).contains('Open standard');
    expect(content).contains('Unix');
    expect(content).contains('ALGOL');
  })

  it('checks first div is there', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    const content = await page.textContent('.accordion .head span');
    expect(content).to.contains('Scalable Vector Graphics');
  })

  it('toggle content more', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    await page.click('text=More')
    const visible = await page.isVisible('.extra p');
    expect(visible).to.be.true
  })

  it('toggle first-child content more', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    //playwright selector - check for more
    await page.click(('#main>.accordion:first-child >> text=More'));
    await page.waitForSelector('#main>.accordion:first-child >> .extra p')
    const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
    expect(visible).to.be.true
  })


  it('toggle content less', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    await page.click('text=More')
    await page.click('text=Less')

    const visible = await page.isVisible('.extra p');
    expect(visible).to.be.false
  })
  it('toggle first-child content less', async () => {
    await page.goto(
      'http://localhost:3002/'
    );
    //playwright selector - check for more
    await page.click(('#main>.accordion:first-child >> text=More'));
    await page.waitForSelector('#main>.accordion:first-child >> .extra p')
    await page.click(('#main>.accordion:first-child >> text=Less'));

    const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
    expect(visible).to.be.false
  })
});
