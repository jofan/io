/**
  * Module dependencies
  */

var express = require("express"),
    cons    = require('consolidate'),
    swig    = require('swig'),
    app     = express();


// Configure

app.use(express.favicon());
app.use(express.logger('dev'));
app.engine('.html', cons.swig);
app.set('view engine', 'html');
// app.set("view options", {layout: false});
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));


// Swig templating setup

swig.init({
    root: __dirname + "/views",
    allowErrors: true // allows errors to be thrown and caught by express instead of suppressed by Swig
});
app.set('views', __dirname + "/views");

app.get('/', function (req, res) {
    res.render('index.html', { foo: 'bar' });
});

app.listen(3333);
console.log('listening on 3333');