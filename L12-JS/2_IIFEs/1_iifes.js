(function(){
    let a = 10;
    console.log(a);
    console.log("Hello World");
})()


// We can use iife's to hide info
let info = (function(name, age, hobbies, marks){
    function passedExams(){
        return marks>=33;
    }

    function printDetails(){
        console.log("Name",name);
        console.log("Age",age);
        console.log("Hobbies",hobbies);
        console.log("Marks",marks);
    }

    return {
        "passedExams" : passedExams,
        printDetails
    }
})("Ruchi",19,["Cleaning Books"],50);

console.log(info)
console.log(info.passedExams());
info.printDetails();

