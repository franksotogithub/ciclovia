const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');



const ElementTramo = sequelize.define('element_tramo', {
  /***id */
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  /***datos iniciales */
  id_tramo: { type: Sequelize.INTEGER, allowNull: false },
  elemento : { type: Sequelize.STRING(50), allowNull: true },
  tipo : { type: Sequelize.STRING(50), allowNull: true },
  estado : { type: Sequelize.STRING(50), allowNull: true },
  data:  { type: Sequelize.FLOAT, allowNull: true },
  latitud: { type: Sequelize.FLOAT, allowNull: true },
  longitud: { type: Sequelize.FLOAT, allowNull: true },
  observacion: { type: Sequelize.STRING(255), allowNull: true },
  img: { type: Sequelize.TEXT, allowNull: true },
  usuario: { type: Sequelize.STRING(50), allowNull: true },
  /*shape : {
    type: Sequelize.GEOMETRY('POINT'),
    allowNull: true

   }*/
},

{
  freezeTableName: true, 
   hasTrigger: true ,
/*
classMethods: {

  hooks: {
    afterCreate: function(element_tramo){
      element_tramo

    }


  }

}*/


},

);

module.exports = { ElementTramo };


