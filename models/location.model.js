
module.exports = (sequelize,Sequelise) => {
    const Location = sequelize.define("location",{
        name:{
            type: Sequelise.STRING
        },
        longitude:{
            type: Sequelise.STRING
        },
        latitude:{
            type: Sequelise.STRING
        }
    });
    return Location;
}