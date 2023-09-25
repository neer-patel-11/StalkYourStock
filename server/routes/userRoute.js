const userController = require("../controllers/userController");

// =========================

// using express
const express = require("express");
const app = express();

app.post("/login", userController.login);

app.post("/register", userController.register);

app.get("/logout", userController.logout);

app.get("/profile", userController.getProfile);

module.exports = app;
// ============================
