const path = require("path");
// connecting to atlas Mongo

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/StalkYourStock");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
var userRoute = require("./routes/userRoute.js");
var stockRoute = require("./routes/stockRoute.js");
var homeRoute = require("./routes/homeRoute.js");
var portfolioRoute = require("./routes/portfolioRoute.js");
var transactionRoute = require("./routes/transactionRoute.js");
app.use(express.json());

// app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/stock", stockRoute);
app.use("/", homeRoute);
app.use("/portfolio", portfolioRoute);
app.use("/transaction", transactionRoute);

app.post("/submit", (req, res) => {
  // console.log('Received data from the form:', req.body);
  // res.send(JSON.stringify({"name":"abc"}));
  res.status(200).json({
    status: "sucsees",
  });
});

let data = [
  { id: 1, name: "wclhbd 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Set up CORS (for local development)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/index", (req, res) => {
  res.json(data);
});

app.post("/index", (req, res) => {
  console.log(req.body);
  data[0].name = req.body.name;
  data[1].name = req.body.email;
  data[2].name = req.body.message;

  res.json(data);
});

app.listen(8080, (err) => {
  console.log(err);
});

// https://query1.finance.yahoo.com/v8/finance/chart/RELIANCE.ns?metrics=high?&interval=3mo&range=10mo
