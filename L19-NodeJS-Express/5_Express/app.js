const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("<b style='color: red;'>Hello Kya Haal Hai?</b>");
})

app.get('/greetings',(req,res)=>{
    res.send("Hello Welcome to my app");
})

app.get('/bye',(req,res)=>{
    res.send("Buh Byee");
})

app.listen(4444,()=>{
    console.log("http://localhost:"+4444);
})