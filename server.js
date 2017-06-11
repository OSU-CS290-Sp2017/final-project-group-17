var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var bodyParser = require('body-parser');

var classData = require('./classData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

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
  console.log("== url params for request:", req.params);
  var classSet = req.params.classSet;
  var classData = classData[classSet]; //added
  if (classData){
    var templateArgs = {
      flashCard: classData[classSet].studySet,
      stylesheet2: "/card.css",
      script2: "/card.js",
    }
  res.render('cardPage', templateArgs);
  } else {
      next();
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server listening on the specified port.
app.listen(port, function () {
  console.log("== Server listening on port", port);
});

//app.listen(port);

