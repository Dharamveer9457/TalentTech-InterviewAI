const mongoose = require("mongoose");
require("dotenv").config();

// Retrieve the MongoDB connection URL from the environment variable
const dbURI = process.env.mongourl;

// Function to connect to MongoDB
const connection = async () => {
  try {
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

// Export the function to be used in other parts of the application
module.exports = { connection };
