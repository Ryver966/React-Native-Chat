'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false
        },
      },
      {
        schema: 'public'
      }
    );
    queryInterface.addColumn(
      'Users',
      'Id',
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
      }
    );
    queryInterface.addColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
    queryInterface.addColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
    queryInterface.addColumn(
      'Users',
      'nickName',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
