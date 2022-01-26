const Sequelize = require('sequelize');
const key = require('../privateKeys');

const SCHEMA_NAME = 'todo';
const USER_NAME = key.USER_NAME;
const PASSWORD = key.PASSWORD;

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
