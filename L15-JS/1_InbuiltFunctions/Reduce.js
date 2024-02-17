let arr = [1,2,3,4,5];

console.log(arr);

// let ans = arr.reduce((acc,val,indx,arr)=>{
//     console.log("Acc:",acc,"Val:",val,"Indx:",indx);
//     return acc + val;
// })

let ans = arr.reduce((acc,val)=>{
    // console.log("Acc:",acc,"Val:",val,"Indx:",indx);
    return acc + val;
},0);

console.log("Sum:",ans);