const mongoose = require("mongoose");
const crypto = require("crypto");
const UserSchema = require("./userModel.js");
const moment = require("moment-timezone");

// user schema
const portfolioSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: true,
  },
  currentBuyings: {
    type: Number,
    required: true,
  },
  currentQuantity: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});

// ======================
const PortfolioSchema = mongoose.model("PortfolioSchema", portfolioSchema);

// exporting userschema
module.exports = PortfolioSchema;
// ======================
