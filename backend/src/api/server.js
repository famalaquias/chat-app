const SERVER_HOST = 'localhost'; 
const SERVER_PORT = 8080;
const PORT = 3333;
const app = require('./app');

const socket = require('socket.io');
const server = require("http").createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
  console.log('[IO] Message => A new connection has been established');
  socket.on('chat.message', (message) => {
    io.emit('chat.message', message);
  });
  socket.on('disconnect', () => console.log('[IO] Message => A connection has been closed'));
}).on('error', (err) => console.log(`[IO] Error => ${err}`));

app.listen(PORT);
server.listen(SERVER_PORT,SERVER_HOST, () => {
  console.log(`Api rodando na porta ${SERVER_HOST}:${SERVER_PORT}`);
  console.log('Presione Ctrl+C para stop.');
});