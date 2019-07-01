var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

//const PORT = 3000;
//const HOST = '0.0.0.0';

const GoLangServiceProxy = httpProxy('http://localhost:3001');
const PhpServiceProxy = httpProxy('http://localhost:3002');
const NodeJsServiceProxy = httpProxy('http://localhost:3003/traefik');
const testServiceProxy = httpProxy('https://gsabadini.github.io');

app.get('/test', (req, res, next) => {
  testServiceProxy(req, res, next);
})

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

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);