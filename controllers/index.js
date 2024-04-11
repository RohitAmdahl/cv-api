const cvData = require("../models/cvmodel");

const getAllData = async (req, res) => {
  try {
    const data = await cvData.find({});
    // res.status(200).json({ message: "Data fetched successfully" });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getAllDataTesting = async (req, res) => {
  try {
    res.status(200).json({ message: "Data fetched successfullyTesting" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllData, getAllDataTesting };
