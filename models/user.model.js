

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        PF: {
            type: Sequelize.STRING(10)
        },
        email: {
            type: Sequelize.STRING
        },
        mobile_number: {
            type: Sequelize.STRING
        },
        deviceID:{
            type: Sequelize.STRING
        }

    });

    return User;
}