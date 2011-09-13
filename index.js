var express = require('express')
  , stylus = require('stylus');

var app = express.createServer();

app.configure(function() {
  console.log('configuring');
  app.set('view engine', 'jade');
  app.use(stylus.middleware({
    src: __dirname + '/views',
    dest: __dirname + '/public',
    compile: function(str, path) {
      return stylus(str)
        .set('paths', [require('stylus-blueprint')])
        .set('warn', true)
        .set('compress', true);
    }
  }));
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
})


app.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = app;
