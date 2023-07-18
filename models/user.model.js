const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstname:{
            type:Sequelize.STRING
        },
        lastname: {
            type:Sequelize.STRING
        },
        PF: {
            type:Sequelize.STRING(10)
        },
        mobile_number: {
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING
        },
        NIN :{
            type:Sequelize.STRING(20)
        },
        TIN :{
            type:Sequelize.STRING(20)
        },
        PASSWORD :{
            type:Sequelize.STRING
        }
    });

    User.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.PASSWORD, 10);
        user.PASSWORD = hashedPassword;
    });
    return User;
}