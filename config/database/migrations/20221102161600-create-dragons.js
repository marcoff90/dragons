'use strict';
const Sequelize = require('sequelize');
const { DataTypes, DATE } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dragon', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      heads: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      attack: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      speed: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      armor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      firepower: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      shotLimit: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'shot_limit',
      },
      venom: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      jawStrength: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'jaw_strength',
      },
      stealth: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      intro: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'profile_image',
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'main_image',
      },
      heightImg: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        field: 'height_image',
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: (
          Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000
        ).toFixed(2),
      },
      classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'class_id',
        references: {
          model: 'class',
          key: 'id',
        },
      },
      speciesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'species_id',
        references: {
          model: 'species',
          key: 'id',
        },
      },
    });

    await queryInterface.addIndex('dragon', ['class_id']);
    await queryInterface.addIndex('dragon', ['species_id']);
    await queryInterface.addIndex('dragon', ['heads']);
    await queryInterface.addIndex('dragon', ['class_id', 'heads']);
    await queryInterface.addIndex('dragon', [
      'class_id',
      'heads',
      'species_id',
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dragon');
  },
};
