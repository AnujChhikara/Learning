const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-course", "root", "Anuj@2000kaka", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
