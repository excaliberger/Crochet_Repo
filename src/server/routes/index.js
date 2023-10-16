import express from "express";
import patternFunction from "../controllers/patterns.controller.js";
import path from "path";
import fs from "fs";
import { scraperParamsTrigger } from '../web_scraper/scraper-params.js'

// const { scraperParamsTrigger } = require("../web_scraper/scraper-params.js");

//set up imports/exports correctly

const router = express.Router();

// placeholder code
router.get("/:id?", async (req, res, next) => {
  
  let { id } = req.params;
  let data;

  if (id) {
    data = await patternFunction.findOne(id);
  } else {
    console.log("get works");
    data = await patternFunction.findAll();
  }

  // res.json(data) is what connects and transfers data to frontend through fetch()
  res.json(data);
});

router.post("/", async (req, res, next) => {
  // let url = req.body.PATTERN_LINK;
  let body = req.body;
  let url = patternFunction.PATTERN_LINK;
  // let data;
  let data;
  console.log('------------------------')
  console.log('------------------------')
  console.log("body", body);
  console.log('------------------------')
  console.log('------------------------')
  scraperParamsTrigger(url);
  data = await patternFunction.addOne(body);
  res.json({"message": "successfully inserted one value"});
});

//PUT requests updates object in API
router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data; 
  let body = req.body;
  data = await patternFunction.updateOne(id, body);
  res.json({"message": "entry sucessfully updated"});
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await patternFunction.removeOne(id);
  res.json({"message": "entry now deleted"});
});

router.get("/crochetdb", async (req, res, next) => {
  let patterns = [];

  const dataPath = path.join(`${__dirname}/db/CROCHET_DB.json`);
  const dbCall = await fetch(`http://localhost:8080/api/`);
  // const arrayBuffer = await dbCall.arrayBuffer();

  // JSON.parse(Buffer.from(arrayBuffer).toString())
  dbCall.forEach(item => {
    patterns.push({
      id: item.PATTERN_ID,
      title: item.PATTERN_TITLE,
      url: item.PATTERN_LINK
      });
    });
  fs.writeFileSync(dataPath, JSON.stringify(patterns));
  res.setHeader("Content-Type", "application/json")
  res.json({ "data":patterns });
  res.end();
  });

export default router;
