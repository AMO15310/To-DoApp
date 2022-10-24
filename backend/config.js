const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TodoApp",
});
db.connect((error) => {
  if (error) return error;
  return console.log(`Connected`);
});
module.exports = db;
