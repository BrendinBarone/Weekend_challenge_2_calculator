var express = require('express');
var app = express();
var path = require('path');
var port = 5002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var equation;
var add;
var subtract;
var multiply;
var divide;

app.post('/equation', function(req, res){
  var x = parseFloat(req.body.numX.join(""));
  var y = parseFloat(req.body.numY.join(""));
  var opperator = (req.body.opperator)
  console.log(x, y, opperator);
  add = (x + y);
  subtract = (x - y);
  multiply = (x * y);
  divide = (x / y);
  console.log(add, subtract, multiply, divide);
  if(opperator === 'add') {
    res.send(add.toString());
  } else if (opperator === 'subtract'){
    res.send(subtract.toString());
  } else if (opperator === 'multiply'){
    res.send(multiply.toString());
  }else if (opperator === 'divide'){
    res.send(divide.toString());
  };
});

// THE CATCH ALL
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html'
  res.sendFile(path.join(__dirname, '/public/', file));
});
app.listen(port, function () {
  console.log('server running on port', port);
});
