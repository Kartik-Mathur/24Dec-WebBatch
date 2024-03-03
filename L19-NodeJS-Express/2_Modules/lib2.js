const lib1 = require('./lib1');
console.log("Running lib2");
function subtract(a, b) {
    return a - b;
}

let b = 1;

module.exports = {
    subtract,
    b,
    lib1
}

