import express from 'express';
import cachingMiddleware from './cachingMiddleware.js';

const app = express();

// Add the caching middleware
app.use(cachingMiddleware);

// Define a test route
app.get('/test', (req, res) => {
  res.send('This is a test route!');
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default server;
