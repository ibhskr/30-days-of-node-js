import express from "express";
const app = express();

function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.status(200).send("Success: Number is a positive integer");
  } else {
    throw new Error('Invalid parameter: "number" must be a positive integer');
  }
}

function errorHandler(err, req, res, next) {
  if (err.message.startsWith("Invalid parameter")) {
    res.status(400).send(err.message);
  } else {
    next(err);
  }
}

app.get("/positive", positiveIntegerHandler);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
