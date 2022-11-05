'use strict';
const Sequelize = require('sequelize');
const { DataTypes, DATE } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
      },
      totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'total_price',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  },
};
