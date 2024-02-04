import puppeteer from 'puppeteer';
import patternFunctions from '../controllers/patterns.controller.js'
// import pattern from "../controllers/patterns.controller.js";

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
        const returnedImgArray = document.getElementsByTagName('img');

        const imgArray = Array.from(returnedImgArray).slice(0, 3).map((img) => {
            const src = img.src;
            return src;
            });
        
        return imgArray[1];
    });
    // console.log(titleImg);
    return titleImg;

};

export const titleScraper = async (url) =>  {

    const browser = await puppeteer.launch({
        headless: 'new',
    });
    
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });
};