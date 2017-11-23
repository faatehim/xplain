require('babel-register');

// var server = require('http');

var logger = require('morgan');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

// Server side rendering
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 8888);
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set up our express application

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//routes

app.get("/", function(req,res) {
    return res.render('index');
  }
);
var allPages = {
  CRISPR:"crispr",
  Bitcoin:"bitcoin",
  Ethereum:"ethereum",
  AI:'ai',
  Yemen: 'yemen',
  QuantumComputing: "quantumcomputing"

}

app.get("/resources",function(req,res) {
  var query = req.query.q;

  if (allPages[query]) {
    return res.render(allPages[query]);
  } else {
    return res.render("index"); // render a page with filler info
  }

});

app.get("/about",function(req,res) {
  var query = req.query.q;

  
    return res.render("about"); // render about page
  

});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
  




