var mongoose = require('mongoose');
var { UserSchema } = require('../models/user');
 var bcrypt = require('bcrypt');
 var jwt = require('jsonwebtoken');
const User = mongoose.model('User', UserSchema);

 const addnewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password,10);
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }else{
            user.hashPassword = undefined;
        res.json(user);
        }
    });
}

const login = (req,res)=>{
   User.findOne({
       email: req.body.email
   },(err,user)=>{
       if(err) throw err;
       if(!user){
           res.status(401).json({message :"Authentication Failed No user found"});
       }else if(user){
           if(!user.comparePassword(req.body.password,user.hashPassword)){
            res.status(401).json({message :"Authentication Failed ! Wrong password "});  
           }
           else{
               return res.json({token : jwt.sign({email: user.email, 
                username : user.username,_id:user.id},'RESTFULAPIs')});
       }
    }
   })}; 

const loginRequired = (req,res,next)=>{
    if(req.user){
        next();
    }else{
        return res.status(401).json({message : 'Unauthorized User'});
    }
}


 const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

 const getUserWithID = (req, res) => {
    User.findById(req.params.userID, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

 const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userID}, req.body, { new: true, useFindAndModify: false }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

 const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userID}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted user'});
    });
}

module.exports = {
    addnewUser,
    getUsers,
    getUserWithID,
    updateUser,
    deleteUser,
    login,
    loginRequired
}