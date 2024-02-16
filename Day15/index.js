import express from 'express';
import loggingMiddleware from './loggingMiddleware.js';

const app = express();

// Add the logging middleware
app.use(loggingMiddleware);

// Define your routes and other middleware here...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
