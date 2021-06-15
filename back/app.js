const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const aws = require('aws-sdk');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gameRouter = require('./routes/games');
const curationRouter = require('./routes/curation');
const Mongoose  = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const history = require('connect-history-api-fallback');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(history());
app.use('/users', usersRouter);
app.use('/games', gameRouter);
app.use('/curation',curationRouter);
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(history({ verbose: true, index: '/'}));
aws.config.region = 'ap-northeast-2'
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


Mongoose.connect(process.env.MONGO_URI)
.then(console.log("listening to port 3000"))
.catch(err=>console.log(err));

module.exports = app;

