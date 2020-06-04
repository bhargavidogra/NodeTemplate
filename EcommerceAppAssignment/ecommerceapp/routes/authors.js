var express = require('express');
var router = express.Router();

var { addnewauthor,
  getauthors,
  getauthorWithID,
  updateauthor,
  deleteauthor
} = require('../controllers/author-controller');

var {
  loginRequired
} = require('../controllers/user-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  

  //  middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
  //  res.send('respond with a resource');
   next();
},loginRequired, getauthors);

// // Post endpoint
router.post('/',loginRequired,addnewauthor);



//     // get a specific contact
    router.get('/:authorID',function(req,res,next){
              next();
    },loginRequired,getauthorWithID);

//     // updating a specific contact
   router.put('/:authorID',loginRequired,updateauthor)

//     // deleting a specific contact
    router.delete('/:authorID',loginRequired,deleteauthor);

// });
module.exports = router;
