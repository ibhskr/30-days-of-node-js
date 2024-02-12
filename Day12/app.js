import express from "express";
import rateLimit from "express-rate-limit";

const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
  status: 429,
});


app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home page</h1>");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
