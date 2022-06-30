"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Eventos",
      [
        {
          data_inicio: new Date(),
          data_fim: new Date(),
          descricao: "pendente",
          criador_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: new Date(),
          data_fim: new Date(),
          descricao: "finalizado",
          criador_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: new Date(),
          data_fim: new Date(),
          descricao: "pendente",
          criador_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: new Date(),
          data_fim: new Date(),
          descricao: "pendente",
          criador_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: new Date(),
          data_fim: new Date(),
          descricao: "pendente",
          criador_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Eventos", null, {});
  },
};
