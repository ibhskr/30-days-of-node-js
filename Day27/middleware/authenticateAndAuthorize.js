import jwt from "jsonwebtoken";

function authenticateAndAuthorize(roles) {
  return (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }
    try {
      // Verify the token
      const decodedToken = jwt.verify(token, "your_secret_key");

      // Check if user has the required role
      if (!roles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }

      // If token is valid and user has required role, proceed to the next middleware
      req.user = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
}
export default authenticateAndAuthorize;
