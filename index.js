var path = require('path');
var express = require('express');

var app = express();

// var staticPath = path.resolve(__dirname, 'static');
// console.log(staticPath)
// app.use(express.static(staticPath));
app.use('/static', express.static(__dirname + '/static'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 5000, function() {
  console.log('listening');
});