import express from "express";
import pattern from "../controllers/patterns.controller.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// placeholder code
router.get("/:id?", async (req, res, next) => {
  
  let { id } = req.params;
  let data;

  if (id) {
    data = await pattern.findOne(id);
  } else {
    console.log("get works");
    data = await pattern.findAll();
  }
  res.json(data);
});

router.post("/", async (req, res, next) => {
  let body = req.body;
  console.log("body", body)
  let data = await pattern.addOne(body);
  res.json({"message": "successfully inserted one value"});
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let data = await pattern.updateOne(id, body);
  res.json({"message": "entry sucessfully updated"});
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await pattern.removeOne(id);
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
