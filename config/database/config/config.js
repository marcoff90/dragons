require('dotenv').config();

module.exports = {
  development: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME_DRAGON_API,
    host: process.env.RDS_HOSTNAME,
    dialect: process.env.DIALECT,
    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta1.json',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  users: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME_USERS,
    host: process.env.RDS_HOSTNAME,
    dialect: process.env.DIALECT,
    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta2.json',
  },
  orders: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME_ORDERS,
    host: process.env.RDS_HOSTNAME,
    dialect: process.env.DIALECT,
    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta3.json',
  },
};
