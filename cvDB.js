require("dotenv").config();
const connectDB = require("./db/connect");
const cv = require("./models/cvmodel");

const cvData = require("./cv.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    await cv.create(cvData);
    console.log("data");
  } catch (error) {
    console.log(error);
  }
};
start();
