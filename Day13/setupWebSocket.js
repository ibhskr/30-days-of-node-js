import { WebSocketServer } from 'ws';

export function setupWebSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
      console.log('Received: %s', message);
      
      ws.send(message);
    });

    ws.on('close', function() {
      console.log('Client disconnected');
    });
  });
}
