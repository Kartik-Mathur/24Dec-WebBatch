const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const students = require('./models/students');

app.use(express.urlencoded({ extended: true }));

app.post('/insert', async (req, res) => {
    const { name } = req.body;
    try {
        let student = await students.create({
            name,
            age: 18,
            subject: 'C++'
        })
        res.send(student);
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/delete',  async (req, res) => {
    const { name } = req.query;
    try {
        await students.deleteOne({
            name
        })
        res.redirect('/read');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/update', (req, res) => {
    const { name, subject } = req.query;
})

app.get('/read',  async (req, res) => {
    const { name } = req.query;
    try {
        let students = await students.find({});
        res.send(students);
    }
    catch (err) {
        res.send(err);
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/newDB').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });

})
