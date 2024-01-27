function funGenerator(){
    function innerFun(){
        console.log("I am an inner Function");
    }

    return innerFun;
}

let fun = funGenerator();
console.log(fun);


/*
function callFun(fun){
    console.log("Recieved Fun Value:",fun);
    console.log("Recieved Fun In Text:",fun.toString());
    fun();
}

function hello(){
    console.log("Hello World");
}

function world(){
    console.log("My World");
}

callFun(hello);
callFun(world);
*/

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,20));