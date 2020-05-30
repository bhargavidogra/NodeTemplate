var express = require('express');
var router = express.Router();

var { addnewBook,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook
} = require('../controllers/book-controller');


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
},loginRequired, getBooks);

// // Post endpoint
router.post('/',loginRequired,addnewBook);



//     // get a specific contact
    router.get('/:bookID',function(req,res,next){
              next();
    },getBookWithID);

//     // updating a specific contact
   router.put('/:bookID',loginRequired,updateBook)

//     // deleting a specific contact
    router.delete('/:bookID',loginRequired,deleteBook);

// });
module.exports = router;
