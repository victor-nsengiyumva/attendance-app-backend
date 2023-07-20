const express = require('express');
const cors = require("cors");
const session = require('express-session');
const sessionKey = require("./config/session.config")
const app = express();

app.use(cors());

app.use(
  session({
    secret: sessionKey.secretKey,
    resave: false,
    saveUninitialized:false
  })
);

// syncing the database
const db = require("./models/index");
console.log(db.sequelize);
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// routes 
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const tutorialRouter = require("./routes/tutorials");
app.use("/", indexRouter)
app.use("/users", userRouter);
app.use("/tutorials", tutorialRouter);








// setting up server
app.listen(process.env.PORT || 3000, () => console.log('server is started'));


module.exports = app;