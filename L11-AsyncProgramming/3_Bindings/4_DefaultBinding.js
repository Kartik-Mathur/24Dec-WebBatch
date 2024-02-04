// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     // return 10;
// }

// let ruchi = Person("Ruchi",18);
// let mehak = Person("Mehak",22);

// console.log(ruchi);
// console.log(mehak);

function CreatePerson(){
    console.log("This here in create person: ",this);
    function Person(){
        console.log("This here in person function: ",this);
    }

    Person();
}

let ruchi = {
    name: "Ruchi",
    age: "80",
    hobbies: ["Cleaning Books"]
}

CreatePerson.call(ruchi);