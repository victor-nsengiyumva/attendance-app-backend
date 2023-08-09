db = require("../models/index");
const CheckIn = db.checkIn;
const CheckOut = db.checkOut



exports.getAttendanceLogs = async (req, res, next) => {
    res.send("these are all the logs for attendance");
}


exports.checkIn = async (req, res, next) => {

    const checkin = {
        userID: req.body.userID,
        checkInTime: req.body.checkInTime,
        dateToday: req.body.dateToday
    }


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


exports.checkOut = async  (req, res, next) => {

    console.log(req.body.dateToday)
    const checkout = {
        userID: req.body.userID,
        checkOutTime: req.body.checkOutTime,
        dateToday: req.body.dateToday
    }

    await CheckOut.create(checkout)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(
                "Some error occurred while creating the User."
            );
        });
}


exports.registerOvertime = (req, res, next) => {
    res.send("these are all the logs for attendance");
}

exports.registerAbsent = (req, res, next) => {
    res.send("these are all the logs for attendance");
}