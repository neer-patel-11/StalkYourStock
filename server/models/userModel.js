const mongoose = require("mongoose");
const crypto = require("crypto");

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
});

// ======================
const UserSchema = mongoose.model("User", userSchema);

// exporting userschema
module.exports = UserSchema;
// ======================
