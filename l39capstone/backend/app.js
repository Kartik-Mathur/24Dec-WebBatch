const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const cors = require('cors')
 
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/user',)
app.use('/admin',require('./routes/admin'));


mongoose.connect('mongodb://127.0.0.1:27017/foodapp')
.then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
}).catch(err=>{
    console.log(err);
})

