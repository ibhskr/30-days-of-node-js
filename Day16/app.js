import express from "express";
import mongoose from "mongoose";

const app = express();
async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("database successfully connected");
  } catch (error) {
    console.error(error);
  }
}

try {
  connectToMongoDB();
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
} catch (error) {
  console.error(error);
}
