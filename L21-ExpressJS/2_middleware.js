const express = require('express');
const app = express();
const PORT = 4444;
// Creating path specific middlewares
// works for : /hello/..../..../..../..../
app.use('/hello',(req,res,next)=>{
    console.log("Running Extra Middleware");
    next();
})

// Creating middleware functions
app.use((req,res,next)=>{
    console.log("Inside middleware - 1");
    next(); // Yeh aapko aage proceed krne dega
});

app.use((req,res,next)=>{
    const {password} = req.query;
    console.log("Inside middleware - 2")
    next()
    // if(password === 'abcd'){
    //     next()
    // }
    // else res.send("Incorrect password");
});

app.get('/',(req,res,next)=>{
    const {password} = req.query;
    console.log(password);
    res.send("Hello!")

    // console.log("After Hello I am here");
    // res.send("Hello World!") // you cannot send two 
    // responses
});

app.get('/hello',(req,res)=>{
    res.send("Hey!!!");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});