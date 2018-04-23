let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let messageStore = {};

io.on('connection', (socket) => {
    console.log('user connected');
    
    let roomId = null;


    socket.on("get-history", function (room, cb) {
        roomId = room;

        console.log("get-history", room, messageStore || []);
        cb(messageStore[room] || []);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('send-message', (message) => {
        let room = message.data.to.data.name;
        
        console.log(room, roomId, message);
        if (room) {
            messageStore[room] = messageStore[room] || [];
            messageStore[room].push(message);

            console.log("Updated storage:", messageStore[room]);
            // if (roomId === nick) {

                io.emit('message', message);
            // }
        }
    });
});

http.listen(5000, () => {
    console.log('started on port 5000');
});