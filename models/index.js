const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD,{
  host: process.env.MYSQLHOST:process.env.MYSQLPORT
  ,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire:30000,
    idle:10000
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
db.location = require("./location.model.js")(sequelize, Sequelize)

db.users.belongsTo(db.location,{foreignKey: 'locationID', targetKey: 'id'})

module.exports = db;
