const mongoose = require("mongoose");
const crypto = require("crypto");
const PortfolioSchema = require("./portfolioModel.js");
const TransactionSchema = require("./transactionModel.js");

// user schema
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  lname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },

  email: {
    type: String,
    required: true,
    maxlength: 260,
  },

  phone: {
    type: String,
    required: true,
    maxlength: 15,
  },

  city: {
    type: String,
    required: true,
    maxlength: 260,
  },

  state: {
    type: String,
    required: true,
    maxlength: 260,
  },

  country: {
    type: String,
    required: true,
    maxlength: 260,
  },

  pincode: {
    type: String,
    required: true,
    maxlength: 6,
  },

  address: {
    type: String,
    required: true,
    maxlength: 500,
  },

  password: {
    type: String,
    required: true,
    maxlength: 260,
  },
  credit: {
    type: Number,
    default: 20000,
    min: 0,
  },
  transaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransactionSchema",
    },
  ],
});

// ======================
const UserSchema = mongoose.model("UserSchema", userSchema);

// exporting userschema
module.exports = UserSchema;
// ======================
