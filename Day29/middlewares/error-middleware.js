function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal server Error";
  const extraDetails = err.extraDetails || "Internal server Error";
  console.log("backend error")
  return res.status(status).json({ message, extraDetails });
  
}

export default errorHandler;
