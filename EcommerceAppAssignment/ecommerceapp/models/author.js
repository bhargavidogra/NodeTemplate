var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const BookSchema = new Schema({
//     title: {
//         type: String,
//         required: 'Enter a title'
//     },
//     price: {
//         type: Number
//     },
//     page_count: {
//         type: Number
//     },
//     image_url: {
//         type: String,
//     },
//     description: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     comment :{
//         type :String
//     }
// },{ id: false });



const AuthorSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    
//    books: [BookSchema],
    image_url: {
        type: String
    },
    description: {
        type: String
    }
},{ id: false });

module.exports ={
    AuthorSchema
}