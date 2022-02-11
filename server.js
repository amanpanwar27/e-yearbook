const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(`mongodb+srv://dadagangtrio:${process.env.CLUSTER_PASSWORD}@cluster0.cxb51.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
     console.log("DataBase successfully connected");
}).catch(err=>console.log(err));

server.listen(PORT,(err)=>{
    if(err)console.log(`error listening to server on : ${PORT} , ${err}`);
    console.log(`sucessfully listening to PORT : ${PORT}`);
});

