const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/users');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, 'asbjdbasbd babsdjhvasjhdvasjhvdjav');
        console.log(token)
        res.setHeader('Set-Cookie', cookie.serialize('jwt', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
        }))
        return res.status(200).json({
            message: 'Login Success'
        })
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({
            message: 'Username already exists, try again!'
        })

        user = await User.create({
            username,
            password
        })

        res.status(200).json({
            message: "User Signup Success!",
            user: {
                username: user.username
            }
        })
    } catch (err) {
        res.status(500).json({
            message: "Error creating new signup"
        })
    }
})


app.get('/user', async (req, res) => {
    // console.log(req.cookie);
    const cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.jwt);
    const token = cookies.jwt;
    const decoded = jwt.verify(token, 'asbjdbasbd babsdjhvasjhdvasjhvdjav');
    const user = await User.find({
        _id: decoded.id
    })
    res.send({ decoded, user })
})

app.get('/verify', async (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    try {
        console.log(cookies.jwt);
        const token = cookies.jwt;
        const decoded = jwt.verify(token, 'asbjdbasbd babsdjhvasjhdvasjhvdjav');
        const user = await User.find({
            _id: decoded.id
        })

        res.send({
            message: "Success",
            user
        })
    } catch (err) {
        res.send({
            message: "Failed"
        })
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })