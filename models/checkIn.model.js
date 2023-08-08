
module.exports = (sequelize,Sequelise) => {
        const CheckIn = sequelize.define("CheckIn", {
            userID:{
                type:Sequelise.INTEGER
            },
            checkInTime:{
                type:Sequelise.STRING
            },
            dateToday:{
                type:Sequelise.STRING
            },
        })
        return CheckIn;
}


