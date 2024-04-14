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
        name,
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

})

app.get('/update', (req, res) => {

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
