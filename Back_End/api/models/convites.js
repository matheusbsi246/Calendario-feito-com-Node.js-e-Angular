'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Eventos, {
        foreignKey: 'evento_id',
      });
      this.belongsTo(models.Usuarios, {
        foreignKey: 'criador_id',
      });
    }
  }
  Convites.init({
    data_evento: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    email_convidado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Convites',
  });
  return Convites;
};