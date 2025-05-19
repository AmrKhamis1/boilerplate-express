let express = require("express");
let app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
app.use("/public", express.static(__dirname + "/public"));
app.use("/", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// app.post("/", (req, res,next) => {
//   res.sendFile(__dirname + "/views/index.html");
//   console.log("Hello Express");
// });
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/name", (req, res, next) => {
  var first = req.query.first;
  var last = req.query.last;
  res.json({ name: first + " " + last });
});
module.exports = app;
