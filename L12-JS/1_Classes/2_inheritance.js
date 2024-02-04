class Vehicle{
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

class Car extends Vehicle{
    constructor(name, price, color){
        super(name);
        this.price = price;
        this.color = color;
    }
}

class Sedan extends Car{
    constructor(owner, name, price, color){
        super(name,price,color);
        this.owner = owner;
    }
}

// let Maruti = new Car("Maruti",100,"Red");
let hondaCity = new Sedan("Ruchi","Honda-City",200,"Grey");
console.log(hondaCity);