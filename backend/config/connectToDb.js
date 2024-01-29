require('dotenv').config();
const mongoose = require("mongoose");


//Establish connection with MongoDb Atlas
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
