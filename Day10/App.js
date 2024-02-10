import express from "express";
import path from "path";
const app = express();

const PORT = 3000;

// Static Middleware
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res, next) {
  res.render("home.html");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
