import { imgScraper, hScraper } from './scraper-fns.js'

export default scraperParamsTrigger = async () => {

    let url = "https://www.craftykittycrochet.com/2020/02/07/rose-granny-square-crochet-pattern/";

    const scraperParams = async () =>  {
        imgScraper(url);
        hScraper(url);
    };
    
    scraperParams(url)

} 