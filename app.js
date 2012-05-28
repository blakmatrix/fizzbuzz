
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fizzbuzz = require ('./lib/fizzbuzz').fizzbuzz;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/:var', function(req, res){
  var num = req.params.var;
  res.send(num+' -> '+fizzbuzz(num));

});

app.listen( (process.env.PORT || 3000) , function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
