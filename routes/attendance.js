const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance.controller");


router.get("/", attendance.getAttendanceLogs);

router.post("/checkIn", attendance.checkIn);

router.post("/checkOut", attendance.checkOut);

router.post("/register/overtime", attendance.registerOvertime);

router.post("/register/absent", attendance.registerAbsent);

router.post("/checkClockIn", attendance.checkClockIn);

router.post("/checkClockOut", attendance.checkClockOut);

router.post("/userCheckins", attendance.userCheckins);

router.post("/userCheckouts", attendance.userCheckouts);


module.exports = router;