const userDetails = document.querySelector('.userDetails');
const chatbox = document.querySelector('.chatbox');
const enterBtn = document.querySelector('.enterBtn');
const name = document.querySelector('.name');

chatbox.classList.add('hidden');
enterBtn.addEventListener('click',(ev)=>{
    let userName = name.value;
    userName = userName.trim();
    if(userName.length){
        chatbox.classList.remove('hidden');
        userDetails.classList.add('hidden');
        socket.emit('enterapp',{
            userName
        })
    }
    
})