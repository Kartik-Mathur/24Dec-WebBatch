const lib2 = require('./lib2');
console.log("Running lib1");
function sum(a, b) {
    return a + b;
}

let a = 1;

module.exports.sum = sum;
module.exports.a = a;
module.exports.lib2 = lib2;
