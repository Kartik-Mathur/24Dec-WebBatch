function hello(){
    // console.log("hello world");
    return "hello world";
}
function add(a,b){
    return a + b;
}

let sum = add(10,20);
console.log(sum);
let x = hello();
console.log(x);
console.log(typeof x);

function sumOpt(a,b){
    if(typeof(a) == 'number' && typeof(b) == 'number') return a + b;
    return "Both values should be integer only";
}

let y = sumOpt(10,"20");
console.log(y);