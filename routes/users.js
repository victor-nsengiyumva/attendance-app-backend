const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");


router.get("/", userController.getUsers);


router.get("/:id", userController.userDetails);


router.post("/signUp", userController.signUp);


router.post("/login", userController.login);

module.exports = router;