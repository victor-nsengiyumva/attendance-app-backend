const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../authMiddleWare/jwtMiddleWare");


router.get("/", userController.getUsers);


router.get("/:id", userController.userDetails);


router.get("/auth/checksession", authMiddleware ,userController.checksession);


router.post("/auth/signup", userController.signUp);


router.post("/auth/login", userController.login);


router.get("/auth/logout", userController.logout);

router.post("/auth/account_delete", userController.accountDelete);

module.exports = router;