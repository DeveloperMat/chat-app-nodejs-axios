const messageList = document.querySelector('#uimessages');
console.log(messageList);
const messageUI = (message) => {
    const div = document.createElement('div');
    div.className = "boxes";    
    div.innerHTML = `
    <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
    <p>${message.message}</p>
</div>
    `

    return div;
}

const renderMessages = (messages) => {
    messageList.innerHTML = "";
    console.log(messages);
    messages.forEach(message => {
     messageList.append(messageUI(message));   
    });
}

const appendNote = (message) => {
    messageList.append(messageUI(message));
}