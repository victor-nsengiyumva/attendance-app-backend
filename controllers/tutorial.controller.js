db = require("../models/index")
const asyncHandler = require("express-async-handler");

const Tutorial =  db.tutorials;
const Op = db.Sequelize.Op



exports.create = asyncHandler( async(req,res,next)=>{
    if (!req.body.title){
        res.status(400).send({
            message: "content cant be empty"
        });
    
        return
    }


    const tutorial = {
        title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false 
    };

    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
});

exports.findAll = asyncHandler( async(req,res,next)=>{

});

exports.findOne = asyncHandler( async(req,res,next)=>{

});

exports.update = asyncHandler( async(req,res,next)=>{

});

exports.delete = asyncHandler( async(req,res,next)=>{

});

exports.deleteAll = asyncHandler( async(req,res,next)=>{

});

exports.findAllPublished = asyncHandler( async(req,res,next)=>{

})