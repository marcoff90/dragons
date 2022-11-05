'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [];

    for (let i = 1; i <= 5; i++) {
      users.push({
        email: `user${i}@example.com`,
        password: bcrypt.hashSync('Password123!', 5),
      });
    }

    await queryInterface.bulkInsert('user', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  },
};
