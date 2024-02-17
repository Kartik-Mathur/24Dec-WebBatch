let arr = [1,2,3,4,5];

console.log(arr);

let arr1 = arr.filter((val,indx,arr)=>{
    if(val%2 == 0) return true;
    return false;
})

console.log(arr1);