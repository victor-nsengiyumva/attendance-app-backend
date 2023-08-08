const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


/// this is a module created to bundle all the models { ie. the user,tutorial,sequelise,Sequelise,checkIn etc } in this one 
/// module called db so that it can be exprted as one and can access all the models from it.
const db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.checkIn = require("./checkIn.model.js")(sequelize, Sequelize);
db.checkOut = require("./checkOut.model.js")(sequelize, Sequelize)


module.exports = db;