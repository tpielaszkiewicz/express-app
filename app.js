var express = require('express');
var app = express();

app.get('/about', function (req, res) {
    res.send('about' + process.env.PORT);
  })

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// Start server 
var port = process.env.PORT || 3000;
// var port = 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});