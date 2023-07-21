const mongoose = require("mongoose");

const MONGO_DB_URL = "mongodb://127.0.0.1:27017/jobboard";

const connectToDB = async () => {
  try {
    const DBConnection = await mongoose.connect(
      `${MONGO_DB_URL}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
