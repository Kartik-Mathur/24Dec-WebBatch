class Person{
    constructor(name,age,marks){
        this.name = name;
        this.isAdult = function(){
            return age>=18;
        }
        this.getMarks = function(){
            return marks;
        }
    }
}

let ruchi = new Person("Ruchi",18,100);
console.log(ruchi);
console.log(ruchi.isAdult());
console.log(ruchi.getMarks());