var tobi = require('tobi')
  , drain = require('drain')
  , app = require(__dirname + '/../')
  , browser = tobi.createBrowser(app);

browser.get('/', function(res, $) {
  res.should.have.status(200);
})

browser.get('/index.css', function(res) {
  res.should.have.status(200);
  app.close();
});
