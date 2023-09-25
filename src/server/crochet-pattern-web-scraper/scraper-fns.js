import puppeteer from 'puppeteer';

export const imgScraper = async (url) =>  {

    const browser = await puppeteer.launch({
        headless: 'new',
    });
    
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });

    const titleImg = await page.evaluate(() => {
    const imgs = document.getElementsByTagName('img');

        return Array.from(imgs).slice(0, 3).map((img) => {
            const src = img.src;
            return { src };
        });

    });

    console.log(titleImg);
    return titleImg;

};

export const hScraper = async (url) => {

    console.log("hScraper is being passed through")

    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });

    const oopsAllHs = await page.evaluate(() => {
        let h = document.getElementsByTagName("h1");

        return Array.from(h).slice(0, 3).map((h) => {
            let h1TextContent = h.textContent;
            return { h1TextContent: h1TextContent[0] };
        });
    });

    console.log(oopsAllHs);
    return oopsAllHs;

    // ***OR***

    // const oopsAllHs = await page.evaluate(() => {
    //     const hSearchRegex = /h*\d/;
    //     const hSelector = document.getElementsByTagName(hSearchRegex);
    // })
    
};


// do a fetch on front end > POST url from img src > take POST req assigned in fetch > run scraper > store img url in db
// GET req > go to different endpoint