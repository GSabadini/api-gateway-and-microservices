var express = require('express');
var app = express();

const PORT = 3003;
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
  res.send('Hello World Node.js!');
});

app.get('/traefik', function (req, res) {
  res.send('Traefik!');
});


app.listen(PORT)