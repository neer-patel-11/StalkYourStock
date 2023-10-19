const mongoose = require("mongoose");
const crypto = require("crypto");
const UserSchema = require("./userModel.js");
const moment = require("moment-timezone");

// user schema
const transactionSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: true,
  },
  isBuy: {
    type: Boolean,
    required: true,

    // true for buy and false for sell
  },
  price: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: new Date().toLocaleString("en-Us", { timeZone: "Asia/Kolkata" }),
  },
  quantity: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});

// ======================
const TransactionSchema = mongoose.model(
  "TransactionSchema",
  transactionSchema
);

// exporting userschema
module.exports = TransactionSchema;
// ======================
