'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Convites', [{
      status: 'pendente',
      criador_id: 4,
      evento_id: 2,
      email_convidado:"example@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'pendente',
      criador_id: 3,
      evento_id: 2,
      email_convidado:"example2@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Convites', null, {});
  }
};
