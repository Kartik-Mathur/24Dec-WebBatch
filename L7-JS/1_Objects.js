let person = {
    name: 'Ruchi',
    age: 80,
    hobby: 'Pizza Khana',
    " ": "Make up ka jhooth bolti hoon"
}

let person1 = {
    name: 'Baadal',
    age: 5,
    hobby: 'Gym jaana',
    '': 'Ladke Chedtha hai',
    "Kaha Ghumna Pasand Hai": "Coding Blocks"
}


// console.log(person);
// console.log(person[" "]);
// console.log(person1[""]);
// console.log(person1["Kaha Ghumna Pasand Hai"]);
// console.log(person1);
// console.log("Name:",person.name);
// console.log("Age:",person.age);
// console.log("Hobby:",person.hobby);

for(let keys in person){
    console.log(person[keys]);
}

for(let keys in person1){
    console.log(person1[keys]);
}