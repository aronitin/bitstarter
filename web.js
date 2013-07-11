var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2 !');
    response.send(readIndex());
});

var readIndex = function(){
   var buffer = new Buffer(fs.readFileSync('index.html'));
   return buffer.toString();
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
