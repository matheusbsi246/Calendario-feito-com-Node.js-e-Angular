"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Eventos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
      },
      data_fim: {
        type: Sequelize.DATEONLY,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      criador_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Eventos");
  },
};
