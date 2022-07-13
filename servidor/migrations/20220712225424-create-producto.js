'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      talla: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      idMarca: {
        type: Sequelize.INTEGER,
				reference :{
					model: 'Marca',
					key: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
      },
      cantidad_inventario: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Productos');
  }
};