const express = require("express");
const transactionController = require("../controllers/transactionController");
const app = express();

app.get("/", transactionController.addTransaction);
app.get("/get", transactionController.getTransaction);

module.exports = app;
