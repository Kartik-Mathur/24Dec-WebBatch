function Person(name,age){
    console.log("Name:",name);
    console.log("Age:",age);
}

Person("Mehak",55);

Person.city = "Delhi"; // Person is a function
// and it is acting like an object too
console.log("City:",Person.city);


// let Person = {
//     name : "Mehak",
//     age: 78
// };

// console.log("Name",Person.name);
// console.log("Age",Person.age);