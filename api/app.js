var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');

var settings = require("./config/setting")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

var upload = multer({ storage: storage });

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(upload.fields([{name:'img1'}, {name:'img2'}]))
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(settings.hostDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(express.json())
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log('Error', err)

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
