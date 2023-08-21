const mongoose = require("mongoose");
const crypto = require("crypto")

// user schema 
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,

  },

  password: {
    type: String,
    required: true,
    maxlength: 260
  },


},
  
);

// ======================
const UserSchema = mongoose.model("User", userSchema);

// exporting userschema
module.exports = UserSchema;
// ======================