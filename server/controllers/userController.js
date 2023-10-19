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
  try {
    let UserData = await user.save();
    if (UserData) {
      res.json({ msg: "Registered succesfully!" });
    }
  } catch (e) {
    res.json({ msg: "Register Unsuccesful!", status: 404 });
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

const updateProfile = async (req, res) => {
  console.log("Neer");
  const userData = req.body;
  const currUser = await UserSchema.findOne({ email: userData.email });
  if (currUser != null) {
    currUser.fname = userData.fname;
    currUser.lname = userData.lname;
    currUser.phone = userData.phone;
    currUser.city = userData.city;
    currUser.state = userData.state;
    currUser.country = userData.country;
    currUser.pincode = userData.pincode;
    currUser.address = userData.address;

    try {
      await currUser.save();
      res.send({ msg: "success" });
    } catch (e) {
      res.send({ msg: e });
    }
  }
};

module.exports = {
  login: login,
  register: register,
  logout: logout,
  getProfile: getProfile,
  updateProfile: updateProfile,
};
