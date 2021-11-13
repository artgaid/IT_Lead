var express = require("express");
var data1234 = require("./assets/data-1234.json");
// var data4321 = require("./assets/data-4321.json");
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/1234", function (req, res, next) {
  res.send(data1234);
});

app.listen(3005, () => console.log("Go-Go-Go Server"));
