
const mongoose = require("mongoose");
require('dotenv').config();
const mongoURI = process.env.DATABASE;
mongoose.connect(mongoURI,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>
  console.log("Connection Start")).catch((error)=>console.log(error.message))
