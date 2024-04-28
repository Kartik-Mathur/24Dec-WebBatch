const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('./models/user');

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(flash());
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/login', (req, res) => {
    console.log(req.flash('msg'));
    res.render('login', {
        msg: req.flash("msg")[0]
    })
})


app.post('/signup', async (req, res) => {
    const { name, password } = req.body;

    let user = await User.findOne({ name });
    if (user) {
        return res.render('signup', {
            msg: "Username exists choose a different name"
        })
    }

    bcrypt.hash(password, saltRounds, async function (err, hash) {
        // Store hash in your password DB.
        user = new User({
            name,
            password: hash
        })

        await user.save();
        req.flash('msg', 'User created successfully');
        console.log("usercreated", req.flash('msg')[0]);

        res.redirect('/login');
    });
})

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    let user = await User.findOne({ name });
    console.log(user);
    bcrypt.compare(password, user.password, function (err, result) {
        if (result == true) {
            req.session.user = user;
            return res.redirect('/profile');
        }
        res.redirect('/login');
    });
})

const isLoggedIn = require('./middlewares/isLoggedIn');
app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})


app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    })
})

mongoose.connect(`mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })