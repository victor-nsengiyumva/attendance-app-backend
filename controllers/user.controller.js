
const asyncHandler = require("express-async-handler");


exports.getUsers = asyncHandler(async (req, res, next) => {

    res.send("these will be the users");

});

exports.userDetails = asyncHandler(async (req, res, next) => {

    res.send(`these will be the users details : ${req.params.id}`);

});

exports.signUp = asyncHandler(async (req, res, next) => {

    res.send("sign up here");


});

exports.login = asyncHandler(async (req, res, next) => {

    res.send("login here");

});