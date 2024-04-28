const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'askjnfasjbdab kjdbakjbdkjabkdbvawkd', // Jo session key banegi
    resave: false,
    saveUninitialized: true, // cookie needed hai ya nhi hai tu bana de
}))

app.get('/login', (req, res) => {
    if(req.session.name) return res.redirect('/home');
    res.render('login');
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (!name) res.redirect('/login');

    req.session.name = name;
    req.session.cnt = 1;
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    if(!req.session.name) return res.redirect('/login');
    // Jab already logged in ho tabhi jaa skta hai
    res.render('home',{
        name: req.session.name,
        cnt: req.session.cnt
    });
    req.session.cnt++;
})


app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        res.redirect('/login')
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});