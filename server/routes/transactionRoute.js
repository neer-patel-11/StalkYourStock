const express = require("express");
const transactionController = require("../controllers/transactionController");
const app = express();

app.get("/", transactionController.addTransaction);

module.exports = app;
