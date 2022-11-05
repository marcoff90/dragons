'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const classes = [
      {
        name: 'Strike',
        image: 'http://localhost:3333/assets/dragon-classes/strike.png',
      },
      {
        name: 'Boulder',
        image: 'http://localhost:3333/assets/dragon-classes/boulder.png',
      },
      {
        name: 'Mystery',
        image: 'http://localhost:3333/assets/dragon-classes/mystery.png',
      },
      {
        name: 'Sharp',
        image: 'http://localhost:3333/assets/dragon-classes/sharp.jpg',
      },
      {
        name: 'Tidal',
        image: 'http://localhost:3333/assets/dragon-classes/tidal.png',
      },
      {
        name: 'Tracker',
        image: 'http://localhost:3333/assets/dragon-classes/tracker.png',
      },
      {
        name: 'Stoker',
        image: 'http://localhost:3333/assets/dragon-classes/stoker.png',
      },
    ];

    await queryInterface.bulkInsert('class', classes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('class', null, {});
  },
};
