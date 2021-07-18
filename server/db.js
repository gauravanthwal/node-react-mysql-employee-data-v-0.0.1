const sql = require("mysql");

// DB setup
let db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node-mysql",
});


module.exports = db;
