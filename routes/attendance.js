const express = require("express");
const router = express.Router();
const attendanceLogs = require("../attendance.controller")


router.get("/", attendanceLogs.getAttendanceLogs);

router.post("/register", attendanceLogs.registerAttendance);

router.post("/register/overtime", attendanceLogs.registerOvertime);

router.post("/register/absent", attendanceLogs.registerAbsent);