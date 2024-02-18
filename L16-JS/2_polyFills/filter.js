Array.prototype.myfilter = function(fun){
    // fun=(val,indx,arr)=>{
    //     return val%2 === 0;
    // }
    let newArr = [];
    let arr = this;

    for(let i = 0 ; i < arr.length; i ++){
            if(fun(arr[i],i,arr))
                newArr.push(arr[i]);
    }

    return newArr;
}

let arr = [1,2,3,4,5,6,7];

let arr1 = arr.myfilter((val,indx,arr)=>{
    return val%2 === 0;
});

console.log(arr1);

