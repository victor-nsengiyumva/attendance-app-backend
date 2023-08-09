module.exports = (sequelize,Sequelise) => {
    const CheckOut = sequelize.define("CheckOut", {
        userID:{
            type:Sequelise.INTEGER
        },
        checkOutTime:{
            type:Sequelise.STRING
        },
        dateToday:{
            type:Sequelise.STRING
        },
    });
    return CheckOut;
}