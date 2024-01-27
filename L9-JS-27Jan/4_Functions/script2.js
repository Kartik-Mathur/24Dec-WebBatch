function hello(){
    console.log("Hello World");
}
var x,y;

hello();

console.log(x(10,20)); // Won't Work

x = function add(a,b){
    return a+b;
}

y = function(a,b){
    return a-b;
}
console.log(y(20,10));