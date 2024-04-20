const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(require('flash')());
// app.use(express.static(path.join(__dirname,'')));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(req,res,next)=>{
    res.render('index')
})

// Router
const userRouter = require('./routes/user');
app.use('/user', userRouter); // '/user', '/user/abc', /user/../../../xyz

const adminRouter = require('./routes/admin');
app.use('/admin',adminRouter);

const superadminRouter = require('./routes/superadmin');
app.use('/superadmin',superadminRouter);

app.use((req,res,next)=>{
    res.render('404',{
        // msg: req.flash('msg')
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });
})
.catch(err=>{
    console.log("Error connecting Database")
})