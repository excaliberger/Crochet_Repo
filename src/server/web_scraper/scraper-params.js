import { imgScraper, titleScraper } from './scraper-fns.js'

export  const scraperParamsTrigger = async (url, callBack) => { 
        let imgUrl = await imgScraper(url);
        callBack(imgUrl);
    };

    //ask Ben Bryant for a refresher where we got callback from, and why its there.