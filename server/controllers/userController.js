const { name } = require("ejs");
const UserSchema = require("../models/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { stringify } = require("querystring");
const securePassword = async (password) => {
  try {
    let hex = crypto.createHash("sha256").update(password).digest("hex");
    const passwordHash = hex;
    return passwordHash;
  } catch (error) {
    res.redirect("/404");
    console.log("hash error");
  }
};

const login = async (req, res) => {
  let email = req.body.email;
  let hexPassword = await securePassword(req.body.password).then();

  const userData = await UserSchema.findOne({ email: email });
  console.log(userData);
  if (userData) {
    if (userData.password == hexPassword) {
      console.log("success");
      res.json({ email: userData.email });
    } else {
      //pass invalid
      res.json({ msg: "password invalid" });
    }
  } else {
    res.json({ msg: "Email not found please register" });

    //email not found
  }

  // res.send({"name":"ne"})
};

const register = async (req, res) => {
  console.log(req.body);
  hexPassword = await securePassword(req.body.password).then();
  let user = new UserSchema({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    pincode: req.body.pincode,
    password: hexPassword,
  });
  console.log(user);
  let UserData = await user.save();

  if (UserData) {
    res.json({ msg: "Data sent succesfully." });
  } else {
    res.json({ msg: "Data not sent ." });
  }
};

const logout = (req, res) => {
  console.log("logout");
};

const getProfile = async (req, res) => {
  const email = req.query.email;
  const userData = await UserSchema.findOne({ email: email });
  res.json({ userData: userData });
};

module.exports = {
  login: login,
  register: register,
  logout: logout,
  getProfile: getProfile,
};
