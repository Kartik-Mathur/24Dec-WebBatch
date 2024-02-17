let arr = [1,2,3,4,5];

let newArr = arr.map((val,indx,arr)=>{
    // console.log(val, " at ",indx, " of ", arr);
    return val*val*val;
})

console.log(arr);
console.log(newArr);


let arr1 = arr.filter((val,indx,arr)=>{
    if(val%2 == 0) return true;
    return false;
})

console.log(arr1);