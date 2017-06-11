var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var classData = require('./classData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res, next) {

  res.render('homePage');

});

app.get('/classes', function (req, res, next) {

  var templateArgs = {
    classes: classData,
    stylesheet2: "/create.css",
    script2: "/create.js",
  };

  res.render('classPage', templateArgs);

});

app.get('/classes/:classSet', function (req, res, next) {

  var classSet = req.params.classSet;

  var templateArgs = {
    flashCard: classData[classSet].studySet,
    stylesheet2: "/card.css",
    script2: "/card.js",
  };

  res.render('cardPage', templateArgs);

});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
