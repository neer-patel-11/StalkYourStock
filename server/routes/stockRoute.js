
const stockInfo = require('../controllers/stockInfo')

// =========================

// using express
const express = require('express')
const app = express();

app.get('/', stockInfo.info);

module.exports = app;
// ============================