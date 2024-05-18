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

io.on('connection',(socket)=>{
    console.log("Connection Established");
    // console.log(socket);
})


httpServer.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});