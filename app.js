const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const cvdata_routes = require("./routes/cvdata");

// middleware to parse json data from request body to object in express app object
app.use("/api/cvdata", cvdata_routes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
