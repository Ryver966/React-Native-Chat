const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const User = require('./users');

const Message = sequelize.define('message', {
  msg: {
    type: Sequelize.STRING,
    allowNull: false
  },
  threadId: {
    type: Sequelize.INTEGER
  },
  authorId: {
    type: Sequelize.INTEGER
  }
});

Message.belongsTo(User, { as: 'author' })

module.exports = Message;