var express = require("express");
var app = express();
var data1234 = require("./assets/data-1234.json");
var data4321 = require("./assets/data-4321.json");

var arrNumbers = [];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/1234", function (req, res, next) {
  arrNumbers = data1234;
  res.send(arrNumbers);
});

app.get("/4321", function (req, res, next) {
  arrNumbers = data4321;
  res.send(arrNumbers);
});

app.listen(3005, () => console.log("Go-Go-Go Server"));
