var createError = require('http-errors');
var express = require('express');
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const homeRouter = require('./routes/home')
const studentRegister = require('./routes/student-register')
const signRouter = require("./routes/student-login")
const studentRouter = require("./routes/s-dashboard")
var cookieParser = require('cookie-parser');
var session = require('express-session');
const seeBooks = require('./routes/see-books');

var app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const  mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://attenderdp:doctorpatient1234@cluster0.asb7n.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('not connected',err);
  });
app.get("/test",(req,res)=>{
  res.render('testing',{})
})

app.use(cookieParser());
app.use(session({
  secret: "this is secret",
  resave: true,
  saveUninitialized: true
 }));

app.use('/', homeRouter);
app.use('/student-login',signRouter);
app.use('/student-register',studentRegister);
app.use('/s-dashboard',studentRouter);
app.use('/see-books', seeBooks)

app.listen(port,(req,res)=>{
    console.log("up and running")
})