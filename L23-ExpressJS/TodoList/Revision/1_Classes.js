class Vehicle{
    constructor(company){
        this.company = company;       
    }
}

class Car extends Vehicle{
    constructor(name,price,company, owner){
        super(company);
        this.name = name;
        this.price = price;
        this.isFirstOwner = function(){
            return owner === 'first'
        }
    }

    printDetails(){
        console.log("Name:",this.name,", Price",this.price,", Company",this.company);
    }

    static printHello(name){
        console.log("Hello",name);
    }
}

let Maruti = new Car("Dzire",100, "Maruti Suzuki","first");
console.log(Maruti);

console.log(Maruti.isFirstOwner());
Maruti.printDetails();

Car.printHello("Jatin");
// Car.printDetails();