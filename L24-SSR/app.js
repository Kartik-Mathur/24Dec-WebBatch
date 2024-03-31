const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
let todos = ["Cricket","Dance","Sing"];

app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'index.html'));
    res.render('index',{
        msg:"I am custom data",
        todos
    });
})

// app.get('/todos',(req,res)=>{
//     res.send(todos);
// })

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});