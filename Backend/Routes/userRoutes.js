const express=require("express");
const { userRegister, Login } = require("../Controller/userController");
const userRouter=express.Router();

userRouter.post("/register",userRegister);
userRouter.post("/login",Login);
module.exports=userRouter;