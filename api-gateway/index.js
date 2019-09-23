//var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var path = require('path');
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express();
const helmet = require('helmet');
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const GoLangServiceProxy = httpProxy('go-microservice:3001');
const PhpServiceProxy = httpProxy('php-microservice:8080');
const NodeJsServiceProxy = httpProxy('node-microservice:3003');
const PythonServiceProxy = httpProxy('python-microservice:5000');

app.use(logger('combined', { stream: accessLogStream }))

// Proxy request
app.get('/go', (req, res, next) => {
  GoLangServiceProxy(req, res, next);
})

app.get('/php', (req, res, next) => {
  PhpServiceProxy(req, res, next);
})

app.get('/node', (req, res, next) => {
  NodeJsServiceProxy(req, res, next);
})

app.get('/python', (req, res, next) => {
  PythonServiceProxy(req, res, next);
})

/*var server = http.createServer(app);
server.listen(PORT, () => console.log('listening'));*/

app.listen(PORT, () => console.log('listening'));