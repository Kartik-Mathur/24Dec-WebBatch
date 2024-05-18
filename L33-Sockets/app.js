const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const {createServer} = require('http');
const {Server} = require('socket.io');
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

let idMap = {};

io.on('connection',(socket)=>{
    console.log("Connection Established with",socket.id);
    // console.log(socket.id);
    socket.emit('welcome',{
        msg:"Welcome to the app"
    });

    socket.on('sendMessage',({msg})=>{
        console.log(socket.id, "says",msg);
    })

    socket.on('enterapp',({userName})=>{
        console.log(userName,"has entered the app");
        idMap[socket.id] = userName;
    })
})


httpServer.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});