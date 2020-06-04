var mongoose = require('mongoose');
var { BookSchema } = require('../models/book');
const Joi = require('@hapi/joi');

const Book = mongoose.model('Book', BookSchema);

 const addnewBook = (req, res) => {
    let newBook = new Book(req.body);

    //JOI Validation
    const schema = Joi.object({
        title:Joi.string().min(3).required(),
        price:Joi.number().required(),
        page_count:Joi.number().required(),
        image_url:Joi.string().required(),
        description:Joi.string().required(),
        author:Joi.string().required(),
        comment:Joi.required()
        });
    
        let result = schema.validate(req.body);
          if(result.error){
              res.status(400).send(result.error.details[0].message);
          }


    newBook.save((err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
}

 const getBooks = (req, res) => {
    Book.find({}, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
}

 const getBookWithID = (req, res) => {
    Book.findById(req.params.bookID, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
}

 const updateBook = (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.bookID}, req.body, { new: true, useFindAndModify: false }, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
}

 const deleteBook = (req, res) => {
    Book.remove({ _id: req.params.bookID}, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted book'});
    });
}

module.exports = {
    addnewBook,
    getBooks,
    getBookWithID,
    updateBook,
    deleteBook
}