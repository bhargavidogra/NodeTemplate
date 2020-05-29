var express= require('express');
var routes = require('./src/routes/crmRoutes');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
const cookieSession = require('cookie-session');

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('trust proxy',1);
//Cookie session
app.use(cookieSession({
   name : 'session',
   keys : ['abcd1234643','cdef34468896']
}));


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>{
       // cookie-session
       if(!req.session.visitCount){
        req.session.visitCount = 0;
       }
       req.session.visitCount += 1;
          console.log(`Number of visits ${ req.session.visitCount}`);
    res.send(`Node and express server running on port ${PORT}`)
    });

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);