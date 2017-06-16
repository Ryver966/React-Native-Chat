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
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true
  },
  onlineStatus: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;