// import WebSocket from 'ws';

// export function setupWebSocketServer(server) {
//   const wss = new WebSocket.Server({ server });

//   wss.on('connection', function connection(ws) {
//     console.log('Client connected');

//     ws.on('message', function incoming(message) {
//       console.log('Received:', message);
//       // Broadcast message to all clients
//       wss.clients.forEach(function each(client) {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(message);
//         }
//       });
//     });

//     ws.on('close', function close() {
//       console.log('Client disconnected');
//     });
//   });
// }
