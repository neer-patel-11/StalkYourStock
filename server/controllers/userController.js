const { name } = require('ejs');
const UserSchema = require('../models/userModel')

let data = [
    { id: 1, name: 'wclhbd 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];


const login = (req,res)=>{
    console.log("Login")

    let user =new UserSchema({
        name:req.body.name,
        password:req.body.email
    });
    console.log(user)
    user.save()
    res.json(data);

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