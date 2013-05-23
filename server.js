/**
  * Module dependencies
  */

var express = require("express"),
    cons    = require('consolidate'),
    swig    = require('swig'),
    app     = express();


// Configure

var port = 3333;

app.use(express.favicon());
app.use(express.logger('dev'));
app.engine('.html', cons.swig);
app.set('view engine', 'html');
// app.set("view options", {layout: false});
app.set("port", process.env.PORT || port);
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

app.listen(app.settings.port);
console.log('listening on ' + app.settings.port);