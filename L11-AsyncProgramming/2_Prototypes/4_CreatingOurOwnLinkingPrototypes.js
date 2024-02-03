function vector(){

}

vector.prototype = Object.create(Array.prototype);
console.log(vector());// undefined;

let v = Object.create(vector.prototype);
console.log(v.join);
