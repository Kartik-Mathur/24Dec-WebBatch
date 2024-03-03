const lib2 = require('./lib2');
console.log("Running lib1");
function sum(a, b) {
    return a + b;
}

let a = 1;

module.exports = {
    sum,
    a,
    lib2
}
