var mongoose = require('mongoose');
var { AuthorSchema } = require('../models/author');
const Joi = require('@hapi/joi');



const author = mongoose.model('author', AuthorSchema);

 const addnewauthor = (req, res) => {
    let newauthor = new author(req.body);

 //JOI Validation
 const schema = Joi.object({
    name:Joi.string().min(3).required(),
    image_url:Joi.string().required(),
    description:Joi.string().required(),
    });

    let result = schema.validate(req.body);
      if(result.error){
          res.status(400).send(result.error.details[0].message);
      }

    newauthor.save((err, author) => {
        if (err) {
            res.send(err);
        }
        res.json(author);
    });
}

 const getauthors = (req, res) => {
    author.find({}, (err, author) => {
        if (err) {
            res.send(err);
        }
        res.json(author);
    });
}

 const getauthorWithID = (req, res) => {
    author.findById(req.params.authorID, (err, author) => {
        if (err) {
            res.send(err);
        }
        res.json(author);
    });
}

 const updateauthor = (req, res) => {
    author.findOneAndUpdate({ _id: req.params.authorID}, req.body, { new: true, useFindAndModify: false }, (err, author) => {
        if (err) {
            res.send(err);
        }
        res.json(author);
    });
}

 const deleteauthor = (req, res) => {
    author.remove({ _id: req.params.authorID}, (err, author) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted author'});
    });
}

module.exports = {
    addnewauthor,
    getauthors,
    getauthorWithID,
    updateauthor,
    deleteauthor
}