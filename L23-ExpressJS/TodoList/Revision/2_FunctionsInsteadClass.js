function Vehicle(){}

function Car(){}

let Maruti = new Car();
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.printDetails = ()=>{
    console.log("Name:",this.name,", Price",this.price,", Company",this.company);
}
console.log(Maruti)