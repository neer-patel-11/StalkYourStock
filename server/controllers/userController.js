const { name } = require('ejs');
const UserSchema = require('../models/userModel')


const login = (req,res)=>{
    console.log("Login")

    let user =new UserSchema({
        name:req.body.name,
        password:req.body.email
    });
    console.log(user)
    user.save()
    res.json({"msg":"Data sent succesfully."});

    // res.send({"name":"ne"})
}

const register = (req,res)=>{
    console.log("register")

}

const logout = (req,res)=>{
    console.log("logout")

}


module.exports ={
    "login":login,
    "register":register,
    "logout":logout
}