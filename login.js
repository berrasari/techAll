const express = require("express");
const dotenv = require('dotenv')
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("public/images"));
var mysql = require("mysql");
const connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "x3hgZ3nUG5",
  password: "3tVH3fIG9j",
  database: "x3hgZ3nUG5",
});



connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
