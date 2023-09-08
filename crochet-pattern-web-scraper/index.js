// import { writeFile } from 'fs'


// const imgs = require.context('https://crochetedworld.com/crochet/crochet-sweater-vest-tutorial-for-beginners/')

async function fetchImages () {

    // console.log("yup this works");

    fetch('https://crochetedworld.com/crochet/crochet-sweater-vest-tutorial-for-beginners/')
    .then((res) => {
        // The API call was successful!
        return res.text();
    })
    .then(function (html) {
        // Convert the HTML string into a document object
        var parser = new DOMParser();

        //test code
        if (parser == undefined) {
            console.log("parser not defined");
        } else {
            console.log(parser);
        }
        //--------

        var doc = parser.parseFromString(html, 'text/html');
    
        // Get the image file
        var imgs = doc.getElementsByTagName('img');

        // data.push(pattern);
        console.log(imgs);

        // writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
        //     if (err) {
        //     console.error(err);
        //     } else {
        //     console.log("successfully created file.");
        //     }
        // });

    
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    

}

fetchImages();

// const cheerio = require("cheerio");
// const axios = require("axios")

// async function scrapeWebpage() {
//     const axiosResponse = await axios.request({
//         method: "GET",
//         url: "https://crochetedworld.com/crochet/crochet-sweater-vest-tutorial-for-beginners/",
//         headers: {
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
//         }
//     });
//     axiosResponse;
//     console.log("yup this works");
// }

// scrapeWebpage()