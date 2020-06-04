var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const logger = require('pino')();
let middleware = require('../helper/middleware');
const {TokenSchema} = require('../models/token');

const refreshTokens = mongoose.model('Token', TokenSchema);

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

router.post('/auth/token',(req,res)=>{
  const refreshToken = req.body.token
  if(refreshToken == null)return res.sendStatus(401)
  if(
 
  (req,res)=>{
    refreshTokens.findOne({
      token: refreshToken
    },(err,token)=>{
        if(err) throw err;
        if(!token){
            res.status(401).json({message :"Authentication Failed No token found"});
        }
      });
 
                return res.json({refreshToken :refreshToken});
        }

  )return res.sendStatus(403)
  jwt.verify(refreshToken,'RESTFULAPIs',(err,user)=>{
    if(err) return res.sendStatus(403)
    const accessToken = generateAccessToken(user);
    res.json({accessToken:accessToken})
  })
})

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
