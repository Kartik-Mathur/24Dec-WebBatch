const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'')));

app.use('/', require('./routes/user'));

mongoose.connect(`mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })