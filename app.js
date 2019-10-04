var express = require('express');
var app = express();


const https = require("https")
const data = JSON.stringify({ "name": "Sebastian" })


app.get('/', function (req, res) {

  //req.query.validationToken.toString()
  let token =  req.query.validationToken
  const dataHook = JSON.stringify( token )


  const options = {
    hostname: "env7rk1tvl46b.x.pipedream.net",
    port: 443,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": dataHook.length,
    },
  }

  const reqHook = https.request(options)

  reqHook.write(dataHook.toString())
  reqHook.end()

  res.send(req.query);
});

module.exports = app;
