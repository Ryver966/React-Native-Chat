const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Friendship = sequelize.define('friendship', {
  isAccept: {
    type: Sequelize.BOOLEAN,
    default: false
  },
  friendshipId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Friendship;