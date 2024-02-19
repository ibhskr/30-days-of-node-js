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

app.post("/", (req, res) => {
  const userData = addUserToDatabase({
    username: "john_doe",
    email: "invalid-email",
  });
  res.json(userData);
});

async function getAllUsers(req, res) {
  try {
    const userData = await User.find();
    res.json(userData);
  } catch (error) {
    res.json({ error: "An error occurred while fetching users." });
  }
}

app.get("/user", getAllUsers);

try {
  connectToMongoDB();
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
} catch (error) {
  console.error(error);
}
