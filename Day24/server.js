import express from "express";
import connectDB from "./db/connectDB.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
//--
const app = express();
app.use(bodyParser.json());
app.use(router);

connectDB();
//--
try {
  app.listen(3000, () => {
    console.log("server running on port : 3000");
  });
} catch (error) {
  console.log("unable to running server...");
}
//--