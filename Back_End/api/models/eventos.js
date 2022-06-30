"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, {
        foreignKey: "criador_id",
        as: "usuarios",
      });
      this.hasMany(models.Convites, {
        foreignKey: "evento_id",
        as: "convites",
      });
    }
  }
  Eventos.init(
    {
      descricao: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Eventos",
    }
  );
  return Eventos;
};
