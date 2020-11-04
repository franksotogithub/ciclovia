
const Sequelize = require('sequelize')


DATABASE ='DEV_TEST'
USER ='sa'
PASSWORD = 'Noepao40'
HOST ='10.0.102.135'
PORT ='1a33'

let sequelize = null;

if (!sequelize) {
  sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mssql',
    port:PORT,
    dialectOptions: {
        options: {
            instanceName: 'SQLSERVERIMP',
            validateBulkLoadParameters: true
      
        },
      },
    
  })
}


sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });
  

  const eraseDatabaseOnSync = true;



  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    
  });


  module.exports = {
    sequelize
}


 /*
const {PGUSER,
    PGHOST,
    PGPASSWORD,
    PGDATABASE,
    PGPORT} = require("./../config")



let sequelize = null;

if (!sequelize) {
  sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    port:PGPORT,
    timezone: '-05:00'
  })
}

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })
  
  const eraseDatabaseOnSync = false;

  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    
  });
   



const pool = new Pool({
    ssl:true
   // statement_timeout: 100 //115000

})

pool.on('connect', client => {
    client.query("SET TIMEZONE='America/Lima'")
  })

function openConnection(){
    return pool.connect()
}

module.exports = {
    openConnection,
    pool,
    sequelize
}*/