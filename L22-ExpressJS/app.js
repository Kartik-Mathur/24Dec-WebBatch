const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

let getPath = (file)=>path.join(__dirname,file);

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.get('/contact',(req,res,next)=>{
    res.sendFile(getPath('contact.html'));
})

app.get('/hello',(req,res)=>{
    const {name,password} = req.query;
    res.send(`Hello,${name} with password: ${password}`)
})

app.post('/hello',(req,res)=>{
    console.log(req.body)
    const {name,password} = req.body;
    res.send(`${name}, ${password}`);
})

app.get('/learningpost',(req,res)=>{
    res.sendFile(getPath('learningpost.html'));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});