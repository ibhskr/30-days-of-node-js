import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);

// Function to set up and return the WebSocket server
function setupWebSocketServer(server) {
  const wss = new WebSocketServer({ server });

  // Array to store connected clients and their data
  const connectedClients = [];

  // Function to broadcast message to all clients (excluding the sender)
  const broadcastMessage = (message, sender) => {
    connectedClients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client !== sender) {
        client.send(message);
      }
    });
  };

  // Function to send message to a specific client
  const sendMessageToClient = (clientId, message) => {
    connectedClients.forEach((client) => {
      if (client.id === clientId && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };

  // Handle incoming messages
  wss.on('connection', (ws) => {
    // Add connected client to the list with initial data
    connectedClients.push({ ws, name: null, document: null });

    // Handle incoming messages from the client
    ws.on('message', (message) => {
      const data = JSON.parse(message);

      switch (data.type) {
        case 'connect':
          // Associate user name with the client
          connectedClients.find((client) => client.ws === ws).name = data.name;
          // Broadcast a welcome message for the new user
          broadcastMessage(
            JSON.stringify({
              type: 'userConnected',
              name: data.name,
            })
          );
          break;
        case 'message':
          // Broadcast the chat message to all clients with sender's name
          broadcastMessage(
            JSON.stringify({
              type: 'chatMessage',
              name: connectedClients.find((client) => client.ws === ws).name,
              message: data.message,
            })
          );
          break;
        case 'documentUpdate':
          // Update document data for the client and broadcast the update
          connectedClients.find((client) => client.ws === ws).document = data.document;
          broadcastMessage(JSON.stringify({ type: 'documentUpdate', document: data.document }));
          break;
        // Handle other message types (e.g., private messages)
        default:
          console.error('Received unknown message type:', data.type);
      }
    });

    // Handle client disconnection
    ws.on('close', () => {
      // Remove disconnected client from the list
      const disconnectedClient = connectedClients.find((client) => client.ws === ws);
      connectedClients.splice(connectedClients.indexOf(disconnectedClient), 1);

      // Broadcast a user disconnected message
      broadcastMessage(
        JSON.stringify({
          type: 'userDisconnected',
          name: disconnectedClient.name,
        })
      );
    });
  });

  return wss; // Return the WebSocket server instance
}

// Start the server with WebSocket setup
const wss = setupWebSocketServer(server);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
