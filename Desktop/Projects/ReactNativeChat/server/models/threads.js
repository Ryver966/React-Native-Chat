const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Thread = sequelize.define('thread', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  messages: {
    type: Sequelize.JSONB
  }
});

module.exports = Thread;