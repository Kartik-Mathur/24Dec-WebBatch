class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // getName(){
    //     return this.name;
    // }

    // getAge(){
    //     return this.age;
    // }
    // getter
    get getName(){
        return this.name;
    }

    // setter
    set setName(name){
        this.name = name;
    }
}

let ruchi = new Person("Ruchi",18);
let mehak = new Person("Mehak",22);

// console.log(ruchi.getName());
// console.log(ruchi);

// Getter and setter
console.log(ruchi.getName);
ruchi.setName = "Ruchi Thukral";
console.log(ruchi.getName);
