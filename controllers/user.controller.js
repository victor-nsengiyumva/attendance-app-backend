db = require("../models/index")
const jwt = require("jsonwebtoken")

const jsontoken  = require("../config/session.config");

const User = db.users
const Op = db.Sequelize.Op

exports.getUsers = (req, res, next) => {

    res.send("these will be the users" );

};

exports.userDetails = (req, res, next) => {

    res.send(`these will be the users details : ${req.params.id}`);

};

exports.signUp = async (req, res, next) => {

    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        PF: req.body.PF,
        mobile_number: req.body.mobile_number,
        email: req.body.email,
        NIN: req.body.NIN,
        TIN: req.body.TIN,
        PASSWORD: req.body.PASSWORD
    }

    await User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });


};

exports.login = async (req, res, next) => {

    var PF = req.body.PF
    // console.log(PF)
    var email = req.body.email
    // console.log(email)

    if (PF) {

        try {
            data = await User.findOne({ where: { PF: { [Op.eq]: PF } } })
            if (data) {
                // Generate a token
                const token = jwt.sign({ userId: data.id }, jsontoken.secretKey, { expiresIn: '3h' });

                // Send the token in the response
                res.header('Authorization', `Bearer ${token}`).send({ data, token });

            } else {
                res.send("User with that PF doesnt exist")
            }

        } catch (error) {
            res.send("Some error occurred during login")
        }

    } else if (email) {

        try {
            data = await User.findOne({ where: { email: { [Op.eq]: email } } })
            if (data) {

                // Generate a token
                const token = jwt.sign({ userId: data.id }, jsontoken.secretKey, { expiresIn: '3h' });

                // Send the token in the response
                res.header('Authorization', `Bearer ${token}`).send({ data, token });
                
            } else {
                res.send("User with that email doesnt exist ")
            }
        } catch (error) {
            res.send("Some error occurred during login")
        }
    }else{
        res.send("Provide PF or email");
    }

};

exports.logout = async (req, res, next) => {


    res.send("successful logout")
};

exports.checksession = async (req, res, next) => {


    res.send(`yeah the verification has worked ${req.userId}`);
};


exports.accountDelete = async (req, res, next) => {


    res.send(`successfully deleted account for ${req.userId}`);
};