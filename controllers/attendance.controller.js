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


exports.checkOut = async (req, res, next) => {

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

exports.checkClockIn = async (req, res, next) => {

    const userID = req.body.userID;
    const dateToday = req.body.dateToday;


    try {

        data = await CheckIn.findOne({ where: { userID: userID, dateToday: dateToday } })

        if (data) {
            res.send(data);
        } else {
            res.send(false);
        }


    } catch (error) {
        res.send(error, "some error occured during retieving the checkIn")
    }
}

exports.checkClockOut = async (req, res, next) => {
    const userID = req.body.userID;
    const dateToday = req.body.dateToday;


    try {

        data = await CheckOut.findOne({ where: { userID: userID, dateToday: dateToday } })

        if (data) {
            res.send(data);
        } else {
            res.send(false);
        }


    } catch (error) {
        res.send(error, "some error occured during retieving the checkOut")
    }
}