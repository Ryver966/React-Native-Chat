const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Thread = require('./threads');

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;