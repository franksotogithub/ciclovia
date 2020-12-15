const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Tramo = sequelize.define('tramo', {
  /***id */
  id: {
    type: Sequelize.INTEGER,   
    /*autoIncrement: true, */
    primaryKey: true,

  },
  
  /*
  nombre_via_y_km: { type: Sequelize.STRING(250), allowNull: true },
  distancia : { type: Sequelize.FLOAT, allowNull: true },
  desde : { type: Sequelize.STRING(250), allowNull: true },
  hasta : { type: Sequelize.STRING(250), allowNull: true },
  id_via: { type: Sequelize.INTEGER, allowNull: true },
  sentido: { type: Sequelize.STRING(50), allowNull: true },
  tipo: { type: Sequelize.STRING(50), allowNull: true },
  ancho : { type: Sequelize.FLOAT, allowNull: true },
  usuario : { type: Sequelize.STRING(50), allowNull: true },
  seccion_vial_normativa :{ type: Sequelize.STRING(100), allowNull: true },
  seccion_vial_actual : { type: Sequelize.STRING(100), allowNull: true },
  distrito : { type: Sequelize.STRING(100), allowNull: true },
  */


 nombre_via: { type: Sequelize.STRING(250), allowNull: true },
 distancia : { type: Sequelize.FLOAT, allowNull: true },
 desde : { type: Sequelize.STRING(250), allowNull: true },
 hasta : { type: Sequelize.STRING(250), allowNull: true },
 id_via: { type: Sequelize.INTEGER, allowNull: true },
 sentido: { type: Sequelize.STRING(50), allowNull: true },
 tipo: { type: Sequelize.STRING(50), allowNull: true },
 ancho : { type: Sequelize.FLOAT, allowNull: true },
 usuario : { type: Sequelize.STRING(50), allowNull: true },
 seccion_vial_normativa :{ type: Sequelize.STRING(100), allowNull: true },
 seccion_vial_actual : { type: Sequelize.STRING(100), allowNull: true },
 distrito : { type: Sequelize.STRING(100), allowNull: true },
 nombre: { type: Sequelize.STRING(250), allowNull: true },
 geo_json: { type: Sequelize.TEXT, allowNull: true },
 observacion: { type: Sequelize.TEXT, allowNull: true },
},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,
  
}
);

module.exports = { Tramo };


