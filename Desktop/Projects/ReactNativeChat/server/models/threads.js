const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Message = require('./messages');
const User = require('./users');

const Thread = sequelize.define('thread', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  chatters: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
});

Thread.hasMany(Message, { as: 'messages' });

module.exports = Thread;