import mongoose from "mongoose";
async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("database successfully connected");
  } catch (error) {
    console.error(error);
  }
}

export default connectToMongoDB;
