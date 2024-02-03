function Person(city,country) {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Hobbies:", this.hobbies);
    if(city) console.log("City:", city);
    if(country) console.log("Country:", country);
}

let ruchi = {
    name: "Ruchi",
    age: "80",
    hobbies: ["Cleaning Books"]
}

let mehak = {
    name: "Mehak",
    age: "100",
    hobbies: ["Kapdey Dhona Maar Maar Kar"]
}
// Person ke andar ke this ko change krna manually 
// 1. Call
// Person.call(ruchi, "Delhi","India");
// Person.call(mehak, "Uganda", "Africa");
// 2. Apply
// Person.apply(ruchi, ["Delhi","India"]);
// Person.apply(mehak, ["Uganda", "Africa"]);

// 3. Bind: Apply and Call immediately Function ko invoke
// kar dete hai, what if merko abhi call nhi krna 
let p1 = Person.bind(ruchi, "Delhi");
let p2 =  Person.bind(mehak);

p1("India");
p2("Uganda","Africa");

