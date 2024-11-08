const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-course",
  password: "Anuj@2000kaka",
});

module.exports = pool.promise();
