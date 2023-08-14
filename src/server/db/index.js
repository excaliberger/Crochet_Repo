// import mysql from "mysql";
// import config from "../config";

// const connection = mysql.createPool(config.mysql);

// export default connection;

import mysql2 from "mysql2";
import config from "../config/index.js";

const connection = mysql2.createPool(config.mysql);

export default connection;