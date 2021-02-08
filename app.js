var createError = require('http-errors');
var express = require('express');
//세션 변수
var session = require('express-session')
var FileStore = require('session-file-store')(session); //1 

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

// var indexRouter = require('./server/routes/index');
// var usersRouter = require('./server/routes/list');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

//세션 정의
app.use(session({
  secret: 'tortuga mount',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/list', usersRouter);

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
