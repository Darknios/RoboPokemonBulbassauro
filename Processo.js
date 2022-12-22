const puppeteer = require('puppeteer');

console.log('Bem vindo');

async function robo() {
    const browser = await puppeteer.launch({ headless: true, timeout: 120000 });
    const page = await browser.newPage();
    const qualquerurl = ('https://pokemon.fandom.com/pt-br/wiki/Bulbassauro');
    await page.goto(qualquerurl, { timeout: 0 });
    //await page.screenshot({ path: 'bulbasassauro.png', fullPage: true });
    await page.screenshot({
        path: 'element.png',
        clip: {
            x: 450,
            y: 1050,
            width: 340,
            height: 550,
        }
    });

    await browser.close();

}

robo();
