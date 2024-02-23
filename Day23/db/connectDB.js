import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("database connected...");
  } catch (error) {
    console.log("unable to connect with database");
  }
}
export default connectDB;
