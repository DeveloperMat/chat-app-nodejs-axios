import { v4 as uuid } from 'uuid';

let messages = [];

export default (io) => {
    io.on("connection",(socket) => {
        console.log('nuevo socket conectado ',socket.id);
    
    socket.on('client:newmessage',(newMessage) => {
        const message = {...newMessage,id:uuid()};
        messages.push(message);
        io.emit('server:newmessage',message);

    })

    io.emit('server:loadmessages',messages);

    // socket.on('server:newmessage',appendNote);











    })
}