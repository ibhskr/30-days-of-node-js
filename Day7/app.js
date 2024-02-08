import express from "express";
const app = express();

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toUTCString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}
app.use(requestLoggerMiddleware);

app.get("/",(req,res)=>{
    console.log('req "/" route')
    res.send('hello')
})
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
