let arr = [1,2,3,4,5];

let arr1 = [6,7,8,9,10];

let newArr = [...arr,...arr1];
console.log(newArr);

function sum(...args){
    return args.reduce((accum,val)=>accum+val);
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));