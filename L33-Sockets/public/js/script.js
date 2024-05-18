const userDetails = document.querySelector('.userDetails');
const chatbox = document.querySelector('.chatbox');
const enterBtn = document.querySelector('.enterBtn');
const name = document.querySelector('.name');
let cppBtn = document.querySelector('.cpp');
let javaBtn = document.querySelector('.java');
let pythonBtn = document.querySelector('.python');
let cpproom = document.querySelector('.cpproom');
let javaroom = document.querySelector('.javaroom');
let pythonroom = document.querySelector('.pythonroom');

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


cppBtn.addEventListener('click',(ev)=>{
    javaroom.classList.add('hidden');
    pythonroom.classList.add('hidden');
    cpproom.classList.remove('hidden');
    socket.emit('joincpp');
    socket.on('cppmsg',({msg})=>{
        console.log(msg);
    })
})

javaBtn.addEventListener('click',(ev)=>{
    cpproom.classList.add('hidden');
    pythonroom.classList.add('hidden');
    javaroom.classList.remove('hidden');
})

pythonBtn.addEventListener('click',(ev)=>{
    javaroom.classList.add('hidden');
    cpproom.classList.add('hidden');
    pythonroom.classList.remove('hidden');
})