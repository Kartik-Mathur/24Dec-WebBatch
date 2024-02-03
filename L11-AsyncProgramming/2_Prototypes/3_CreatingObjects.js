let Person = {
    city: "Delhi"
};


let p1 = Object.create(Person);

console.log(p1);
console.log(p1.__proto__);
console.log(p1.__proto__ == Person);

console.log(p1.city);
console.log(p1.__proto__.__proto__);