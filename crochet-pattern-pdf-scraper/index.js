import puppeteer from "puppeteer";

const fetchImages = async() => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
      });
    
      // Open a new page
      const page = await browser.newPage();

    console.log("yup this works");

}

fetchImages();