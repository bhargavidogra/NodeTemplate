var express = require('express');
var router = express.Router();
const logger = require('pino')();
let middleware = require('../helper/middleware');


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
  logger.info(`Request from: ${req.originalUrl}`)
  logger.info(`Request type: ${req.method}`)
  //  res.send('respond with a resource');
   next();
},loginRequired, getUsers);

// // Post endpoint
router.post('/auth/register',addnewUser);
router.post('/auth/login'
,login);


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
