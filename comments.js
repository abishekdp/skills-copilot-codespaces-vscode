// Create web server
// Start: node comments.js
// Test: curl -d "comment=Hello" http://localhost:3000/comments
// Test: curl http://localhost:3000/comments
// Test: curl -X DELETE http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
  comments.push(req.body.comment);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.delete('/comments', function(req, res) {
  comments = [];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
