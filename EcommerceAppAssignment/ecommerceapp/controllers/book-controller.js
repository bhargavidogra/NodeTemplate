var mongoose = require('mongoose');
var { BookSchema } = require('../models/book');

const Book = mongoose.model('Book', BookSchema);

 const addnewBook = (req, res) => {
    let newBook = new Book(req.body);

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