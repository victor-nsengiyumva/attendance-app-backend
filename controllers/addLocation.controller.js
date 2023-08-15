const db = require("../models/index");
const Location = db.location;

exports.createLocation = async (req,res,next) => {
        const location = {
            name:req.body.name,
            longitude:req.body.longitude,
            latitude:req.body.latitude
        }
        
        data = await Location.create(location);
        res.send('this was successful',data);
}


exports.addlocation = (req,res,next) => {     
        res.render("addlocation");
}
