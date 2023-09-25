import query from "../db/utils.js";
import path from "path"
import { writeFile } from "fs";
import data from "../db/CROCHET_DB.json"

const dataPath = path.join(`${__dirname}/db/CROCHET_DB.json`);

const findAll = async () => {
  return await query("SELECT ID, PATTERN_TITLE, PATTERN_LINK FROM CROCHET_DB");
};

const findOne = async (id) => {
  return await query("SELECT ID, PATTERN_TITLE, PATTERN_LINK FROM CROCHET_DB WHERE ID = ?", [
    id
  ]);
};

const addOne = async (pattern) => {
  let sqlQueryAdd= await query("INSERT INTO CROCHET_DB SET ?", [pattern]);
  pattern['ID']=''+sqlQueryAdd.insertId;
  data.push(pattern);

  writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("successfully created file.");
    }
  });

  return sqlQueryAdd;
};

const updateOne = async (id, pattern) => {
  let sqlQueryUpdate= await query("UPDATE CROCHET_DB SET ? WHERE ID = ?", [pattern, id]);
  pattern['ID']=''+sqlQueryUpdate.insertId;
  data.push(id, pattern);

  writeFile("./db/CROCHET_DB.json", JSON.stringify(data), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("successfully created file.");
    }
  });

  return sqlQueryUpdate;
};

const removeOne = async (id) => {
  let sqlQueryDelete= await query("DELETE FROM CROCHET_DB WHERE ID = ?", [id]);
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