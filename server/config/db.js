const { default: mongoose } = require("mongoose");
const colors = require("colors");

constmongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`.bgWhite);
  } catch (error) {
    console.log(`MongoDB Error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
