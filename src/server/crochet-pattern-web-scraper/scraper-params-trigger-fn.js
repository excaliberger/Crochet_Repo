import { url, scraperParamsTrigger } from './scraper-params.js'

const link = `${url}`;

const scraperTrigger = async () => {
    scraperParamsTrigger();
}

// console.log('link', link)

scraperTrigger(link);

export default scraperTrigger;