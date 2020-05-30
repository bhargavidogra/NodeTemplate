var express = require('express');
var router = express.Router();

var { addnewUser,
  getUsers,
  getUserWithID,
  updateUser,
  deleteUser,
  login,
  loginRequired
} = require('../controllers/user-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  

  //  middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
  //  res.send('respond with a resource');
   next();
},loginRequired, getUsers);

// // Post endpoint
router.post('/auth/register',addnewUser);
router.post('/auth/login',login);


//     // get a specific contact
    router.get('/:userID',function(req,res,next){
              next();
    },loginRequired,getUserWithID);

//     // updating a specific contact
   router.put('/:userID',loginRequired,updateUser)

//     // deleting a specific contact
    router.delete('/:userID',loginRequired,deleteUser);

// });
module.exports = router;
