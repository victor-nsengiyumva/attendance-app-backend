const db = require("../models/index");
const Location = db.location;

exports.createLocation = async (req,res,next) => {
        console.log(req.body.name);
        console.log(req.body.longitude);
        console.log(req.body.latitude);
        
        const location = {
            name:req.body.name,
            longitude:req.body.longitude,
            latitude:req.body.latitude
        }
        
        data = await Location.create(location);
        
        res.send(data);
}


exports.addlocation = (req,res,next) => {     
        res.render("addlocation");
}
