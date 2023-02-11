function connectSockets(httpServer){
    const io = require('socket.io')(httpServer,  {
        cors: {
          origin: '*',
        }
    });
    io.on("connection", function (socket) {
        const idHandShake = socket.id;
        const {chatid, userID} = socket.handshake.query;
        console.log('CONECTADO --->', userID);

        
        // console.log("Hola dispositivo --> " + idHandShake);
        // console.log("Dispositivo: "+ idHandShake + "Se unio al "+"Chat ID: " + chatid)

        const rooms = [chatid];
        socket.join(rooms);

        // socket.to(chatid).emit('connect-user-chat', {
        //     isOnline: true
        // })

        socket.on('in-chat', (res) => {
            console.log('in chat')
            const data = res;
            console.log(data)
            socket.to(chatid).emit('in-chat', data);
        })

        socket.on('disconnect', (res) => {
            socket.to(chatid).emit('disconnect-user-chat',{
                isOnline: false 
            })
            console.log('DESCONECTADO');
        });

        
        socket.on(`event-notification`, (res) => {
            const data = res;
            console.log('socket data NOTI', data);
            let channel = `${data.to}-event-notification`;
            console.log('channel', channel);
            socket.broadcast.emit(channel, data)
        })

        socket.on('event', (res) => {
            const data = res;
            console.log(data);
            socket.to(chatid).emit('event', data)
        })

        socket.on('event-chat', (res) => {
            const data = res;
            console.log('socket data', data);
            socket.to(chatid).emit('event-chat', data)
        })
    });

}

module.exports = {connectSockets}
