const msForm = document.querySelector('#msForm');
const message = document.querySelector('#message');
const box = document.querySelector('#box');
const boxes = document.querySelector('.boxes');
msForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    saveMessage(message.value); 
    box.scroll({ top: box.scrollHeight, behavior: 'smooth' });
    message.value = "";
})
