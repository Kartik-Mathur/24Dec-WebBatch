const lib1 = require('./lib1');
console.log("Running lib2");
function subtract(a, b) {
    return a - b;
}

let b = 1;

module.exports.subtract =subtract;
module.exports.b = b;
module.exports.lib1 = lib1;

