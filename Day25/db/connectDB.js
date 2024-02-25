import mongoose from "mongoose";
import createProductNameIndex from "../controllers/createProductNameIndex.js";

// Connect to MongoDB
const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(() => {
      console.log("Connected with Database");

      // Call the function to create the index on "name" field
      createProductNameIndex()
        .then(() => {
          console.log("Index creation completed");
          // After index creation, you can proceed with other operations
        })
        .catch((error) => {
          console.error("Index creation failed:", error);
        });
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
export default connectDB;
