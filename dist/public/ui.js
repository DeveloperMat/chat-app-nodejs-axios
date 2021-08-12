"use strict";

var messageList = document.querySelector('#uimessages');
console.log(messageList);

var messageUI = function messageUI(message) {
  var div = document.createElement('div');
  div.className = "boxes";
  div.innerHTML = "\n    <div class=\"card card-body rounded-0 animate__animated animate__fadeInUp mb-2\">\n    <p>".concat(message.message, "</p>\n</div>\n    ");
  return div;
};

var renderMessages = function renderMessages(messages) {
  messageList.innerHTML = "";
  console.log(messages);
  messages.forEach(function (message) {
    messageList.append(messageUI(message));
  });
};

var appendNote = function appendNote(message) {
  messageList.append(messageUI(message));
};