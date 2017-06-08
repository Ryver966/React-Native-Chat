const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://piotrgorski:1234@localhost:5432/ChatApp');

module.exports = sequelize;