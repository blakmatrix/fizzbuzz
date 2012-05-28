
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

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
  var num;
  num = req.params.var;

  if(       num % 3 !== 0 && num % 5 !== 0 ){
    res.send(req.params.var)
  }else if( num % 3 === 0 && num % 5 !== 0 ){
    res.send("fizz")
  } else if(num % 3 !== 0 && num % 5 === 0 ){
    res.send("buzz")
  } else{ //num % 3 === 0 && num % 5 === 0
    res.send("fizzbuzz")
  }
  res.send('var: '+ num )
});

app.listen( (process.env.PORT || 3000) , function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
