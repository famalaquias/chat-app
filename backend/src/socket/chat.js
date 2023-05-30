// socket/chat.js
const socketIO = require('socket.io');

module.exports = function (server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    socket.on('chat message', (message) => {
      console.log('Mensagem recebida:', message);
      io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });

  return io;
};
