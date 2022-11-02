'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const teams = [{
      image: 'http://localhost:3333/assets/teams/barf_and_belch_dragon-team.png'
    }, {
      image: 'http://localhost:3333/assets/teams/hookfang_dragon-team.png'
    }, {
      image: 'http://localhost:3333/assets/teams/meatlug_dragon-team.png'
    }, {
      image: 'http://localhost:3333/assets/teams/stormfly_dragon-team'
    }, {
      image: 'http://localhost:3333/assets/teams/toothles_dragon-team.png'
    }
    ];

    await queryInterface.bulkInsert('team_images', teams, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('team_images', null, {});
  }
};
