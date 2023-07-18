db = require("../models/index")
const asyncHandler = require("express-async-handler");

const User = db.users


exports.getUsers = asyncHandler(async (req, res, next) => {

    res.send("these will be the users");

});

exports.userDetails = asyncHandler(async (req, res, next) => {

    res.send(`these will be the users details : ${req.params.id}`);

});

exports.signUp = (req, res, next) => {

    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        PF: req.body.PF,
        mobile_number: req.body.mobile_number,
        email:req.body.email,
        NIN:req.body.NIN,
        TIN:req.body.TIN,
        PASSWORD: req.body.PASSWORD
    }

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });


};

exports.login = asyncHandler(async (req, res, next) => {

    res.send("login here");

});