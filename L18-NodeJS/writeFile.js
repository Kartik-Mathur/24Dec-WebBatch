const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'/data/tasks.json');
const arr = [
    {name: 'Ruchi',age: 100},
    {name: 'Mehak',age: 420},
    {name: 'Badal',age: 1},
    {name: 'Doraemon',age: 10},
];

// console.log(__dirname);
// console.log(path.join('a','b'));
// console.log(path.join('a/','/b'));
// console.log(path.join('a','/b'));
// console.log(path.join('a/','b'));

fs.writeFile(filePath,JSON.stringify(arr),(err)=>{
    if(err) throw err;
    console.log("Likh gaya success");
})