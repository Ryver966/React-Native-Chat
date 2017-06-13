const Sequelize = require('sequelize');
const sequelize = require('../db_config');

const Friendship = sequelize.define('friendship', {
  firstUserId: {
    type: Sequelize.INTEGER
  },
  secondUserId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Friendship;