import express from "express";
import errorHandler from "./middlewares/error-middleware.js";
const app = express();

app.get("/", (req, res) => {
  try {
    const data = reqs.body;
    console.log(data);
  } catch (err) {
    next(err);
  }
});
app.use(errorHandler);
app.listen(3000, () => {
  console.log("server running on port 3000");
});
