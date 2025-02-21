require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "JoATKoABJBbywoWYCTPluQRQBgpljbDA",
    database: process.env.DB_DATABASE || "railway",
    host: process.env.DB_HOST || "nozomi.proxy.rlwy.net",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 50391
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "JoATKoABJBbywoWYCTPluQRQBgpljbDA",
    database: process.env.DB_DATABASE || "railway",
    host: process.env.DB_HOST || "nozomi.proxy.rlwy.net",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 50391
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "JoATKoABJBbywoWYCTPluQRQBgpljbDA",
    database: process.env.DB_DATABASE || "railway",
    host: process.env.DB_HOST || "nozomi.proxy.rlwy.net",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 50391
  }
};
