let Person = {
    print: function (){
        console.log(this)
    },
    addHobbie: function(){
        this.hobbies.push("Sweeping");
    },
    name: "Ruchi",
    age: "80",
    hobbies: ["Cleaning Books"]
}

Person.addHobbie();
Person.print();

