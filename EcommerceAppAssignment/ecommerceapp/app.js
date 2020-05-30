var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsonwebtoken = require('jsonwebtoken');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter = require('./routes/books');
var authorRouter = require('./routes/authors');
var User = require('./models/user');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ecommerce',{
  useMongoClient:true
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//JWT setup
app.use((req,res,next)=>{
  if(req.header &&req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT')
  {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1],'RESTFULAPIs',(err,decode)=>{
      if(err) req.user = undefined;
      req.user = decode;
      next();
    });
  }else{
    req.user = undefined;
    next();
  }  
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', bookRouter);
app.use('/authors', authorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
