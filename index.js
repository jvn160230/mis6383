var http = require ('http');
var PORT = process.env.PORT || 5000;​
​
var express = require('express');​
​
var app = express();​
​
​
​
var http = require('http');​
​
var server = http.Server(app);​
​
​
server.listen(PORT, function() {​
​
  console.log('Chat server running');​
​
});​
