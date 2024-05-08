const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blogPost", {
      serverSelectionTimeoutMS: 20,
    });
    console.log("DB connection Successfull");
  } catch (err) {
    console.log("Error while connecting to DB", err);
  }
};

module.exports = dbConnection;
