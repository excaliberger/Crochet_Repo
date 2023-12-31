import query from "../db/utils.js";
import path from "path"
import { writeFile } from "fs";
import data from "../db/CROCHET_DB.json" assert { type: "json" };

const dataPath = path.join(`././db/CROCHET_DB.json`);

const findAll = async () => {
  return await query("SELECT PATTERN_ID, PATTERN_TITLE, PATTERN_LINK, PATTERN_IMG FROM CROCHET_DB");
};

const findOne = async (id) => {
  return await query("SELECT PATTERN_ID, PATTERN_TITLE, PATTERN_LINK, PATTERN_IMG FROM CROCHET_DB WHERE PATTERN_ID = ?", [
    id
  ]);
};

const addOne = async (pattern) => {
  let sqlQueryAdd= await query("INSERT INTO CROCHET_DB SET ?", [pattern]);
  pattern['PATTERN_ID']=''+sqlQueryAdd.insertId;
  data.push(pattern);

  // writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
  //   if (err) {
  //       console.error(err);
  //   } else {
  //       console.log("successfully created file.");
  //   }
  // });

  return sqlQueryAdd;
};

const updateOne = async (id, pattern) => {
  let sqlQueryUpdate= await query("UPDATE CROCHET_DB SET ? WHERE PATTERN_ID = ?", [pattern, id]);
  pattern['PATTERN_ID']=''+sqlQueryUpdate.insertId;
  data.push(id, pattern);

  // writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
  //   if (err) {
  //       console.error(err);
  //   } else {
  //       console.log("successfully created file.");
  //   }
  // });

  return sqlQueryUpdate;
};

const removeOne = async (id) => {
  let sqlQueryDelete= await query("DELETE FROM CROCHET_DB WHERE PATTERN_ID = ?", [id]);
  id =''+sqlQueryDelete.insertId;
  data.pop(id);

  writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("successfully created file.");
    }
  });
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};