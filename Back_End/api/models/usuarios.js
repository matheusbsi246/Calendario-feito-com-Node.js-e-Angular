"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Eventos, {
        foreignKey: "criador_id",
      });
      this.hasMany(models.Convites, {
        foreignKey: "criador_id",
      });
    }
  }
  Usuarios.init(
    {
      usuario: DataTypes.STRING,
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      DataNascimento: DataTypes.DATEONLY,
      senha: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
