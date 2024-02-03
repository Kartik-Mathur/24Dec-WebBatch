let a = 10;
console.log(Number.prototype == a.__proto__); // true

let str = "Hello";
console.log(str.__proto__ == String.prototype); // true