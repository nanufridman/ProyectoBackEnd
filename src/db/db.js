const mongoose = require("mongoose")
require("dotenv").config()

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("database conected");
  } catch {
    console.log("Error: database not connected");
  }
};

module.exports = {
  connectDataBase
}