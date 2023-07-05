import express from "express";
import pattern from "../controllers/patterns.controller.js"

const router = express.Router();

// placeholder code
router.get("/:id?", async (req, res, next) => {
  console.log("get works")
  
  let { id } = req.params;
  let data;

  if (id) {
    data = await pattern.findOne(id);
  } else {
    data = await pattern.findAll();
  }
  res.json(data);
});

router.post("/", async (req, res, next) => {
  let body = req.body;
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

export default router;
