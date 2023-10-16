import puppeteer from 'puppeteer';
// import pattern from "../controllers/patterns.controller.js";

export const imgScraper = async (url) =>  {

    // url = PATTERN_LINK;

    const browser = await puppeteer.launch({
        headless: 'new',
    });
    
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });

    const titleImg = await page.evaluate(() => {
        const returnedImg = document.getElementsByTagName('img');

        return Array.from(returnedImg).slice(0, 3).map((img) => {
            const src = img.src;
            return { src };
        });
    });

    console.log(titleImg);
    return titleImg;

};

let testUrl = "https://urbaki.com/crochet/vintage-style-crochet-collar-top/";

imgScraper(testUrl);

// export const hScraper = async (url) => {

//     console.log("hScraper is being passed through")

//     const browser = await puppeteer.launch({
//         headless: 'new',
//     });
//     const page = await browser.newPage();
//     await page.goto(url, {
//         waitUntil: 'load',
//         timeout: 0
//     });

//     const oopsAllHs = await page.evaluate(() => {
//         let h = document.getElementsByTagName("h1");

//         return Array.from(h).slice(0, 3).map((h) => {
//             let h1TextContent = h.textContent;
//             return { h1TextContent: h1TextContent[0] };
//         });
//     });

//     console.log(oopsAllHs);
//     return oopsAllHs;

    // ***OR***

    // const oopsAllHs = await page.evaluate(() => {
    //     const hSearchRegex = /h*\d/;
    //     const hSelector = document.getElementsByTagName(hSearchRegex);
    // })
    
// };


// do a fetch on front end > POST url from img src > take POST req assigned in fetch > run scraper > store img url in db
// GET req > go to different endpoint