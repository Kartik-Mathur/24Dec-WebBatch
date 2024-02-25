const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '/data/tasks.json');

// Way - 1
fs.readFile(filePath, {
    encoding: 'utf8'
}, (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    console.log(data);
})

// Way - 2 
fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})