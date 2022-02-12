const mongoose = require('mongoose');
const signupschema = new mongoose.Schema({
    email:{type:String},
    id_number:{type:String},
    name:{type:String},
    password:{type:String},
    confirm_password:{type:String}
});

module.exports = mongoose.model("usersignup",signupschema);