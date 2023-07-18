const tutorialController = require("../controllers/tutorial.controller");

const express = require("express");
const router = express.Router();


router.post("/", tutorialController.create)

module.exports = router