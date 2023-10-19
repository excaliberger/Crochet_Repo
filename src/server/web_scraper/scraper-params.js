import { imgScraper } from './scraper-fns.js'

export  const scraperParamsTrigger = async (url, callBack) => { 
        let imgUrl = await imgScraper(url);
        callBack(imgUrl);
        // hScraper(url);
    };