import express from "express";
import User from "./models/userModel.js";
import connectToMongoDB from "./db/connectDB.js";
import bodyParser from "body-parser";
import { averageAgeOfUsers } from "./controllers/userAge.js";

//--
const app = express();
app.use(bodyParser.json());
async function addUserToDatabase(user) {
  try {
    const response = await User.create(user);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

app.post("/", async (req, res) => {
  const { name, age } = req.body;
  await addUserToDatabase({
    name,
    age,
  });
  res.json({ message: "user create successfully", name });
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
app.get("/average-age", averageAgeOfUsers);
try {
  connectToMongoDB();
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
} catch (error) {
  console.error(error);
}
