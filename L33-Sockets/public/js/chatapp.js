const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
let messageBox = document.querySelector('.messageBox');
const logs = document.querySelector('.logs');
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

socket.on('personin',({msg})=>{
    logs.innerHTML = `<li>${msg}</li>` + logs.innerHTML;
})

socket.on('messageRecieved',({msg,user})=>{
    let li = document.createElement('li');
    li.innerText = `${user} : ${msg}`;
    messageBox.appendChild(li);
})