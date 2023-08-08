module.exports = (sequelize,Sequelise) => {
    const CheckOut = sequelize.define("CheckOut", {
        userID:{
            type:Sequelise.INTEGER
        },
        checkInTime:{
            type:Sequelise.TIME
        },
        date:{
            type:Sequelise.DATE
        },
    });
    return CheckOut;
}