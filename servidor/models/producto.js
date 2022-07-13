'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(models.Marca, {
				foreignKey: 'id',
				target_key: 'idMarca',
			})
    }
  }
  Producto.init({
    descripcion: DataTypes.STRING,
    talla: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    idMarca: DataTypes.INTEGER,
    cantidad_inventario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};