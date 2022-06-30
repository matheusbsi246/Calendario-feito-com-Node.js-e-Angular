"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          usuario: "Dracule Mihawk",
          email: "DraculeMwk@onepiece.com",
          senha: "SenhaSuperSegura",
          DataNascimento: "1869-08-07",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario: "Bell Mere",
          email: "Bellmere@onepiece.com",
          senha: "SenhaSuperSegura",
          DataNascimento: "1884-04-04",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario: "Zaphod Beeblebrox",
          email: "ZaphodBeeblebrox@mochileiro.com",
          senha: "SenhaSuperSegura",
          DataNascimento: "1814-07-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario: "Jack Torrance",
          email: "jacktorrance@iluminado.com",
          senha: "SenhaSuperSegura",
          DataNascimento: "1980-02-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario: "Walter White",
          email: "heisenberg@breakingbad.com",
          senha: "SenhaSuperSegura",
          DataNascimento: "1980-02-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
