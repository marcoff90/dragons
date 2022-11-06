'use strict';
const Sequelize = require('sequelize');
const { DataTypes, DATE } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_item', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
      },
      dragonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'dragon_id',
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('order_item', {
      fields: ['order_id', 'dragon_id'],
      type: 'unique',
      name: 'order_dragon_pairing',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_item');
  },
};
