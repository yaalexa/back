const fs = require("fs");
const path = require("path");
const mysql2 = require("mysql2");
const { Sequelize } = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

// En lugar de importar desde config.json, leer las variables de entorno directamente
const config = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "JoATKoABJBbywoWYCTPluQRQBgpljbDA",
  database: process.env.DB_DATABASE || "railway",
  host: process.env.DB_HOST || "nozomi.proxy.rlwy.net",
  dialect: process.env.DB_DIALECT || "mysql",
  port: process.env.DB_PORT || "50391",
  dialectModule: mysql2
};   


const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
