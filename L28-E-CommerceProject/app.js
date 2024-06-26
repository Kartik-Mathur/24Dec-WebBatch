const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');
app.set('view engine', 'hbs');
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// const users = require('./models/users');
// app.use(require('flash')());
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('./authentication/passport');

// app.use(async (req, res, next) => {
//     try {
//         let user = await users.findOne({ name: "Aayush" });
//         req.user = user;
//         next()
//     } catch (err) {
//         next(err);
//     }
// })

const homeRouter = require('./routes/home');
app.post('/user/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/user/products/all');
    });
app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
app.use('/', homeRouter);

// Router
const userRouter = require('./routes/user');
app.use('/user', userRouter); // '/user', '/user/abc', /user/../../../xyz

const adminRouter = require('./routes/admin');
const isAdmin = require('./middlewares/isAdmin');
app.use('/admin', isAdmin, adminRouter);

const superadminRouter = require('./routes/superadmin');
app.use('/superadmin', superadminRouter);

app.use((req, res, next) => {
    res.render('404', {
        // msg: req.flash('msg')
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log("Error connecting Database")
    })