const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'newDB';

app.use(express.urlencoded({ extended: true }));
let db = undefined;

app.post('/insert', (req, res) => {
    const { name } = req.body;
    const student = db.collection('students');
    student.insertOne({
        subject: 'C++'
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/delete', (req, res) => {
    const {name} = req.query;
    const student = db.collection('students');
    student.deleteOne({name})
    .then((result)=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

})

app.get('/update', (req, res) => {
    const {name, subject} = req.query;
    const student = db.collection('students');
    student.updateOne({name}, {$set: {subject}})
    .then((result)=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })
})

app.get('/read', (req, res) => {
    const student = db.collection('students');
    let cursor = student.find({});
    cursor.toArray().then((data) => {
        console.log(data);
        res.send(data);
    })
        .catch((err) => {
            console.log(err);
        })
})

async function main() {
    if (db) return;
    // Use connect method to connect to the server
    await client.connect();
    // console.log('Connected successfully to server');
    db = client.db(dbName);
    // console.log(db)
    return 'done.';
}

main()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
