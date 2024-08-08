const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://drashti_15:Drashti_15@cluster0.cklv0pd.mongodb.net/RaktKoshCenter");
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;