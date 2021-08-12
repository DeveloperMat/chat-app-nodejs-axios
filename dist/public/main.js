"use strict";

var msForm = document.querySelector('#msForm');
var message = document.querySelector('#message');
var box = document.querySelector('#box');
var boxes = document.querySelector('.boxes');
msForm.addEventListener('submit', function (e) {
  e.preventDefault();
  saveMessage(message.value);
  box.scroll({
    top: box.scrollHeight,
    behavior: 'smooth'
  });
  message.value = "";
});