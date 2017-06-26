const Sequelize = require('sequelize');
const sequelize = require('../db_config');

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
  },
  threadId: {
    type: Sequelize.INTEGER
  }
});


module.exports = Message;