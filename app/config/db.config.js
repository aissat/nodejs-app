const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    port: env.port,


    use_env_variable: 'DATABASE_URL',
    dialect: 'postgresql',
    logging: env.logging,

    dialectOptions: env.dialectOptions,

    pool: env.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

module.exports = db;