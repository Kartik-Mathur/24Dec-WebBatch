const express = require('express');
const app = express();
const PORT = 4444;

app.get('/',(req,res)=>{
    res.send("Hello!")
});

let people = {};

// Using Params
app.get('/greetings/:name',(req,res)=>{
    // console.log(req.params);
    const {name} = req.params;
    res.send(`Good Afternoon, ${name}`);
})

// Using query parameters
app.get('/wish',(req,res)=>{
    // console.log(req.query);
    const {name} = req.query;
    if(people[name]){
        people[name]++;
    }
    else{
        people[name] = 1;
    }
    res.send(`Wishes to you ${name}, cnt: ${people[name]}`);
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});