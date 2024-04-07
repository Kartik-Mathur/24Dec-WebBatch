const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
const Tasks = require('./controller/tasks');
// '/gettasks', GET
app.get('/gettasks',async (req,res,next)=>{
    try{
        let tasks = await Tasks.getTasks();
        res.send(tasks);
    }
    catch(err){
        next(err);
    }
})

// '/addtask', POST, {name}
app.post('/addtask',async (req,res,next)=>{
    const {name} = req.body;
    try{
        console.log(name)
        let msg = await Tasks.addTask(name);
        res.redirect('/gettasks');
    } catch(e){
        next(e);
    }
})

// '/deletetask', GET, {name}
app.get('/deletetask',async (req,res,next)=>{
    const {name} = req.query;
    try{
        await Tasks.deleteTask(name);
        res.redirect('/gettasks');
    }
    catch(err){
        next(err);
    }
    
})
// '/increase', GET, {name}
app.get('/increase',async (req,res,next)=>{
    const {name} = req.query;
    try{
        await Tasks.increase(name);
        res.redirect('/gettasks');
    }
    catch(err){
        next(err);
    }
})
// '/decrease', GET, {name}
app.get('/decrease',async (req,res,next)=>{
    const {name} = req.query;
    try{
        await Tasks.decrease(name);
        res.redirect('/gettasks');
    }
    catch(err){
        next(err);
    }
})

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'error.html'));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});