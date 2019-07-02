var express = require('express');
var app = express();
var logger = require('morgan');
var fs = require('fs');
var path = require('path');

const PORT = 3003;

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('combined', { stream: accessLogStream }))

app.get('/node', (req, res) => {
  res.send('Hello World Node.js!');
});

app.listen(PORT, () => console.log('listening'));