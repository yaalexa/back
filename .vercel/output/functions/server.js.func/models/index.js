const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carga variables de entorno

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// 🔥 Usa config.js en lugar de config.json
const config = require(__dirname + '/../config/config.js')[env]; 

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // 🔥 Asegura que Sequelize use las variables de entorno si están definidas
  sequelize = new Sequelize(
    process.env.DB_DATABASE || config.database,
    process.env.DB_USERNAME || config.username,
    process.env.DB_PASSWORD || config.password,
    {
      host: process.env.DB_HOST || config.host,
      dialect: process.env.DB_DIALECT || config.dialect,
      port: process.env.DB_PORT || config.port,
      logging: false // Opcional: evita logs innecesarios en consola
    }
  );
}

// 🔥 Carga todos los modelos de la carpeta actual
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

