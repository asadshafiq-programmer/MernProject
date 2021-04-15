const express = require("express");
const mogoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
dotenv.config({path:'./config.env'}); // to secure userdata,pass


require('./db/conn'); // reqiure database

app.use(express.json());// to get data in json format

app.use(require('./router/auth')); //link router file
//const User = require('./model/userschema'); ///later use

const PORT = process.env.PORT;
app.get('/about',(req,res)=>{
    
    res.send("mera lora");
})
app.get('/contact',(req,res)=>{
    res.send("contact page");
});
app.get('/signin',(req,res)=>{
    res.send("sign in");
});
app.get('/signup',(req,res)=>{
    res.send("sign up");
});
app.listen(PORT,()=>{
    console.log("server working")
})
//Middle ware
const middleware=(req,res,next)=>{
    console.log("middleware");
    next();

}

