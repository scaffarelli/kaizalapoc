var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


const https = require("https")
const data = JSON.stringify({ "name": "Sebastian" })

const options = {
  hostname: "env7rk1tvl46b.x.pipedream.net",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}

const req = https.request(options)
req.write(data)
req.end()

app.get('/', function (req, res) {
  //res.send('Webhook - Kaizala - POC!');
});

module.exports = app;
