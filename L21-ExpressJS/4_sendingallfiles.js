const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Hello From get request");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});