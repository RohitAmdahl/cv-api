require("dotenv").config();
const mongoose = require("mongoose");

const API = process.env.MONGODB_URI;
const connectDB = () => {
  console.log("connectDB");
  return mongoose.connect(API);
};
module.exports = connectDB;
