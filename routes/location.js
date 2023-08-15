const express = require("express");
const router = express.Router();
const locationController = require("../controllers/addLocation.controller");


router.get("/addlocation", locationController.addlocation );
router.post("/createLocation", locationController.createLocation );

module.exports = router;