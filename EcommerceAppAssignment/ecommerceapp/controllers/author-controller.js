var mongoose = require('mongoose');
var { AuthorSchema } = require('../models/author');

const author = mongoose.model('author', AuthorSchema);

 const addnewauthor = (req, res) => {
    let newauthor = new author(req.body);

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