var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    token: {
        type: String,
        required: true
    }
},{ id: false }
);

module.exports ={
    TokenSchema
}