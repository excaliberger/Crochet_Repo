import query from "../db/utils.js";

const findAll = async () => {
  return query("SELECT ID, PATTERN_TITLE, PATTERN_LINK Title FROM CROCHET_DB");
};

const findOne = async (id) => {
  return query("SELECT ID, PATTERN_TITLE, PATTERN_LINK Title FROM CROCHET_DB WHERE ID = ?", [
    id
  ]);
};

const addOne = async (pattern) => {
  return await query("INSERT INTO CROCHET_DB SET ?", [pattern]);
};

const updateOne = async (id, pattern) => {
  return await query("UPDATE CROCHET_DB SET ? WHERE ID = ?", [
    pattern,
    id,
  ]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM CROCHET_DB WHERE ID = ?", [id]);
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};