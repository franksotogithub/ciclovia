const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Via = sequelize.define('vias', {
  /***id */
  OBJECTID: {
    type: Sequelize.INTEGER,
    
    primaryKey: true,
  },
  /***datos iniciales */
  Name: { type: Sequelize.STRING(250), allowNull: false },
  GeoJson : { type: Sequelize.TEXT, allowNull: false },
  
});


module.exports = { Via };


