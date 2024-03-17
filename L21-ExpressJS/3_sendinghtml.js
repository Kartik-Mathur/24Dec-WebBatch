const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
})

/*
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="background-color: orange;">Hello World</h1>
    
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, consequatur.
        </div>
    </body>
    </html>
    `);
})
*/
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});