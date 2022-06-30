'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Convites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      criador_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        },
        allowNull: false
      },
      evento_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'eventos'
          },
          key: 'id'
        },
        allowNull: false
      },
      email_convidado: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Convites');
  }
};