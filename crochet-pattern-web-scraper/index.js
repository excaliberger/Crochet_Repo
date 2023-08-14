const cheerio = require("cheerio");
const axios = require("axios")

async function scrapeWebpage() {
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://crochetedworld.com/crochet/crochet-sweater-vest-tutorial-for-beginners/",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });
    axiosResponse;
    console.log("yup this works");
}

scrapeWebpage()