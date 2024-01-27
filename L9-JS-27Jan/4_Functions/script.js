function hello(){
    console.log("Hello World");
}

hello();

// Since function is a datatype, we can store it inside a variable too
var x = function add(a,b){
    return a+b;
}

console.log(x(10,20));
// console.log(add(10,20)); // Won't work

var y = function(a,b){
    return a-b;
}
console.log(y(20,10));