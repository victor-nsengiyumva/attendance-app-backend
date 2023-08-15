const express = require('express');
const cors = require("cors");

const app = express();



// cors validation
app.use(cors());

// setting up listening to the static folder to serve 
// static files
app.use(express.static('public'));


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

// templating engine
app.set('view engine', 'ejs');

app.set('views', './views');


// routes 
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const tutorialRouter = require("./routes/tutorials");
const attendanceRouter = require("./routes/attendance");
const locationRouter = require("./routes/location");

app.use("/", indexRouter)
app.use("/users", userRouter);
app.use("/tutorials", tutorialRouter);
app.use("/attendance",attendanceRouter);
app.use("/location", locationRouter);




// setting up server
app.listen(process.env.PORT || 3000, () => console.log('server is started'));


module.exports = app;