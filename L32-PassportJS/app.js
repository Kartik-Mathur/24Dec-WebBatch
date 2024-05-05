const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
require('dotenv').config()

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('./authentication/passport');

// app.use(express.static(path.join(__dirname,'')));

app.use('/', require('./routes/user'));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })