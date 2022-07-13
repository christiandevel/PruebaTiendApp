'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			Marca.hasMany(models.Producto, {
				foreignKey: 'idMarca',
			})
    }
  }
  Marca.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Marca',
  });
  return Marca;
};