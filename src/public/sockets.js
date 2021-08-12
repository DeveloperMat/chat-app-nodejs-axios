const socket = io.connect();

const saveMessage = (message) => {
    socket.emit("client:newmessage",{
        message
    })
}

socket.on('server:loadmessages',renderMessages);
socket.on('server:newmessage',appendNote);