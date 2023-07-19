db = require("../models/index")
const asyncHandler = require("express-async-handler");

const Tutorial = db.tutorials;
const Op = db.Sequelize.Op

exports.create = (req, res, next) => {
    if (!req.body.title) {
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
};

// find all by title
exports.findAll = (req, res, next) => {

    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;  // this query will search the database for a title that has  partial string [`%${title}%`] in it
                                                                          // ie it will return all those that have the substring in them, to return the exact title, use Op.eq

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// find one by id
exports.findOne =  (req, res, next) => {

    const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });

};


// update at a particular id
exports.update = (req, res, next) => {

    const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."  // nums is the number of objects/rows that are deleted
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });

};

// delete a particular id
exports.delete = (req, res, next) => {

    const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"  // nums is the number of objects/rows that are deleted
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};


// delete all entries but without deleting the table
exports.deleteAll =  (req, res, next) => {


    Tutorial.destroy({
        where: {},
        truncate: false // this part prevents you from deleting the table just the data
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` }); // nums is the number of objects/rows that are deleted
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// find all where a certain field is true
exports.findAllPublished = (req, res, next) => {
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}