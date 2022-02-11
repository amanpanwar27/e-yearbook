const express = require("express");
require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 8000;
server.listen(PORT,(err)=>{
    if(err)console.log(`error listening to server on : ${PORT} , ${err}`);
    console.log(`sucessfully listening to PORT : ${PORT}`);
});

