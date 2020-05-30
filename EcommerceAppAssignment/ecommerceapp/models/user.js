var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
},{ id: false });

UserSchema.methods.comparePassword = (password, hashPassword)=>{
    return bcrypt.compareSync(password,hashPassword);
};

module.exports ={
    UserSchema
}