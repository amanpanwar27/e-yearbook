const express = require("express");
const {postsignup,getsignup} = require('./auth/signupcontroller');
const {postsignin,getsignin} = require('./auth/signincontroller');
const Router = express.Router();

Router.post("/signin",postsignup);
Router.get("/signup",getsignup);
Router.get("/signin",getsignin);
Router.post("/home",postsignin);
module.exports = Router;
