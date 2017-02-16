// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

var port = 8080;

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, '/')));

// You can then add whatever routing code you need

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;


var server = http.createServer(app);
server.listen(port, function() {
  console.log("Node server running on http://localhost:"+port);
  });