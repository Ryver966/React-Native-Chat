const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Thread = require('./threads');

const Message = sequelize.define('message', {
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  msg: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});


module.exports = Message;