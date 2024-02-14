import express from 'express';
import http from 'http';
import { setupWebSocket } from './setupWebSocket.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
setupWebSocket(server);

app.get('/websocket', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
