const connectDB = require("./db/connect");
const cv = require("./models/cvmodel");

const cvData = require("./cv.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    await cvData.create(cv.json);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
start();
