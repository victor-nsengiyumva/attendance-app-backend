const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());



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
const attendanceRouter = require("./routes/attendance");

app.use("/", indexRouter)
app.use("/users", userRouter);
app.use("/tutorials", tutorialRouter);
app.use("/attendance",attendanceRouter);




// setting up server
app.listen(process.env.PORT || 3000, () => console.log('server is started'));


module.exports = app;