const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const Cookies = require('cookies');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {

    res.render('login');
})

app.post('/login', (req, res) => {
    let cookie = new Cookies(req, res);
    const { name } = req.body;
    if (!name) return res.send('Give a username first');

    cookie.set("details", JSON.stringify({
        name: name,
        role: "user",
        cnt: 1
    }), {
        maxAge: 100000
    });
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    let cookie = new Cookies(req, res);
    const details = JSON.parse(cookie.get('details'));

    if (!details) return res.redirect('/login');
    res.render('home', { name:details.name, cnt: details.cnt });
})

app.get('/admin', (req, res) => {
    let cookie = new Cookies(req, res);
    const details = JSON.parse(cookie.get('details'));

    if(details.role == 'admin'){
        res.send('Welcome to admins page');
    }
    else{
        res.redirect('/home');
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});