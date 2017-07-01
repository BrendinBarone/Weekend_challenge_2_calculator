var express = require('express');
var app = express();
var path = require('path');
var port = 5002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// THE CATCH ALL
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html'
  res.sendFile(path.join(__dirname, '/public/', file));
});
app.listen(port, function () {
  console.log('server running on port', port);
});
