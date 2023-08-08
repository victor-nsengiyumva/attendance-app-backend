db = require("../models/index");
const CheckIn = db.checkIn;



exports.getAttendanceLogs = async (req, res, next) => {
    res.send("these are all the logs for attendance");
}


exports.checkIn = async (req, res, next) => {

    const checkin = {
        userID: req.body.userID,
        checkInTime: req.body.checkInTime,
        dateToday: req.body.dateToday
    }

    console.log(req.body.dateToday)

    await CheckIn.create(checkin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(
                "Some error occurred while creating the User."
            );
        });



}


exports.checkOut = (req, res, next) => {
    res.send("these are all the logs for attendance");
}


exports.registerOvertime = (req, res, next) => {
    res.send("these are all the logs for attendance");
}

exports.registerAbsent = (req, res, next) => {
    res.send("these are all the logs for attendance");
}