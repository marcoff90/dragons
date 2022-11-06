'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const species = [
      {
        species: 'Night Fury',
      },
      {
        species: 'Deadly Nadder',
      },
      {
        species: 'Hideous Zippleback',
      },
      {
        species: 'HotBurple',
      },
      {
        species: 'Monstrous nightmare',
      },
      {
        species: 'Light Fury',
      },
      {
        species: 'Gronckle',
      },
      {
        species: 'StormCuter',
      },
      {
        species: 'RumbleHorn',
      },
      {
        species: 'ArmorWing',
      },
      {
        species: 'Eruptodon',
      },
      {
        species: 'Night Terror',
      },
      {
        species: 'SeaShocker Terror',
      },
      {
        species: 'Skrill',
      },
      {
        species: 'SnapTrapper',
      },
      {
        species: 'Terrible Terror',
      },
      {
        species: 'ThunderDrum',
      },
      {
        species: 'TimberJack',
      },
      {
        species: 'Whispering Death',
      },
      {
        species: 'BeWilderBeast',
      },
      {
        species: 'Death Song',
      },
    ];

    await queryInterface.bulkInsert('species', species, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('species', null, {});
  },
};
