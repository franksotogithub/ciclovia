const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');



const ElementTramo = sequelize.define('element_tramo', {
  /***id */
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /***datos iniciales */
  id_tramo: { type: Sequelize.INTEGER, allowNull: false },
  elemento : { type: Sequelize.STRING(50), allowNull: true },
  tipo : { type: Sequelize.STRING(50), allowNull: true },
  estado : { type: Sequelize.STRING(50), allowNull: true },
  valor:  { type: Sequelize.FLOAT, allowNull: true },
  latitud: { type: Sequelize.FLOAT, allowNull: true },
  longitud: { type: Sequelize.FLOAT, allowNull: true },
  img: { type: Sequelize.TEXT, allowNull: true },
  usuario: { type: Sequelize.STRING(50), allowNull: true },
},

{
  freezeTableName: true, 
}
);

module.exports = { ElementTramo };


