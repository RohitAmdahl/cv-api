require("dotenv").config();
const mongoose = require("mongoose");

const API = process.env.MONGODB_API;
const connectDB = () => {
  console.log("connectDB");
  return mongoose.connect(API);
};
module.exports = connectDB;
