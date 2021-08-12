"use strict";

var socket = io.connect();

var saveMessage = function saveMessage(message) {
  socket.emit("client:newmessage", {
    message: message
  });
};

socket.on('server:loadmessages', renderMessages);
socket.on('server:newmessage', appendNote);