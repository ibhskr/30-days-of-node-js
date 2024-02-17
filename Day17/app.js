import express from "express";
import User from "./userModel.js";
import connectToMongoDB from "./connectDB.js";
const app = express();

async function addUserToDatabase(user) {
  try {
    const response = await User.create(user);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

try {
  connectToMongoDB();
  addUserToDatabase({ username: "john_doe", email: "john@example.com" });
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
} catch (error) {
  console.error(error);
}
