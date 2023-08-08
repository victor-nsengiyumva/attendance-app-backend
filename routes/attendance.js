const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance.controller");


router.get("/", attendance.getAttendanceLogs);

router.post("/checkIn", attendance.checkIn);

router.post("/checkOut", attendance.checkOut);

router.post("/register/overtime", attendance.registerOvertime);

router.post("/register/absent", attendance.registerAbsent);

module.exports = router;