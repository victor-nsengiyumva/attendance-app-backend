const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");


router.get("/", userController.getUsers);


router.get("/:id", userController.userDetails);


router.get("/auth/checksession", userController.checksession);


router.post("/auth/signup", userController.signUp);


router.post("/auth/login", userController.login);


router.get("/auth/logout", userController.logout);

module.exports = router;