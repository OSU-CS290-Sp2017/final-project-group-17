var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

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
console.log("== class params for request:", req.params);
  var classSet = req.params.classSet;

  var templateArgs = {
    flashCard: classData[classSet].studySet,
    stylesheet2: "/card.css",
    script2: "/card.js",
  };

  res.render('cardPage', templateArgs);
});

app.post('/classes/addclass', function (req, res, next) {

   var newClassSet = {
      class: req.body.class,
      studySet: []
   };

   var key = req.body.key;
   classData[key] = newClassSet;
   fs.writeFile('classData.json', JSON.stringify(classData, null, 2), function(err) {
      if(err) {
         res.status(500).send('Unable to create new class set');
      }
      else {
         res.status(200).send();
      }
   });

});

app.post('/classes/:studySet/addCard', function (req, res, next) {
  console.log("== card params for request:", req.params);
  var classes = classData[req.params.classes];

 if (classes) {
   if (req.body && req.body.term) {

     var photo = {
       term: req.body.term,
       definition: req.body.definition
     };

     classes.studySet = classes.studySet || [];

     classes.studySet.push(photo);
     fs.writeFile('classData.json', JSON.stringify(classData), function (err) {
       if (err) {
         res.status(500).send("Unable to save photo to \"database\".");
       } else {
         res.status(200).send();
       }
     });

   } else {
     res.status(400).send("Person photo must have a term.");
   }

 } else {
   next();
 }
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
});
