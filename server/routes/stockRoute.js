const stockInfo = require("../controllers/stockInfo");
const chart = require("../controllers/stockChart");
// =========================

// using express
const express = require("express");
const app = express();

app.get("/stockDetails", stockInfo.info);
app.get("/stockChart", chart.chart);

app.get("/name", stockInfo.nameInfo);
module.exports = app;
// ============================
