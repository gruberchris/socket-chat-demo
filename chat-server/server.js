const io = require('socket.io')(3000);

const users = {};
let messageCount = 0;

io.on('connection', socket => {
    socket.on('userConnected', message => {
        users[socket.id] = message.username;
        socket.broadcast.emit('userConnected', { ...message, id: ++messageCount });
    });

    socket.on('chatMessage', message => {
        //socket.broadcast.emit('chat-message', { message, username: users[socket.id] });
        socket.broadcast.emit('chatMessage', { ...message, id: ++messageCount });
    });

    socket.on('userDisconnected', message => {
        socket.broadcast.emit('userDisconnected', { ...message, id: ++messageCount });
        delete users[socket.id];
    });
});