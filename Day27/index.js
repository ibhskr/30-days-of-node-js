import express from 'express';
import authenticateAndAuthorize from './middleware/authenticateAndAuthorize.js';

const app = express();

// Example route requiring admin role
app.get('/admin', authenticateAndAuthorize(['admin']), (req, res) => {
  res.send('Welcome, Admin!');
});

// Example route requiring regular user role
app.get('/user', authenticateAndAuthorize(['user']), (req, res) => {
  res.send('Welcome, User!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
