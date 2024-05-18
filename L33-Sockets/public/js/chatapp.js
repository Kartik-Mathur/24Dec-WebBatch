const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const socket = io();

socket.on('welcome', ({ msg }) => {
    console.log(socket.id);
    document.querySelector('.msg').innerText = `Server says ${msg}`;
})

btn.addEventListener('click', (ev) => {
    let text = input.value;
    text = text.trim();
    if (text.length) {
        socket.emit('sendMessage', {
            msg: text
        })
    }
    else{
        console.log("Message is empty");
    }
})