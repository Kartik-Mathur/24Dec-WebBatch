Array.prototype.mymap = function(fun){
    // fun = (val,indx,arr)=>{
    //      return val*val
    // };
    // fun(val,indx,arr)
    let arr = this; // [1,2,3,4]
    let newArr = [];

    for(let i = 0 ; i < arr.length; i++){
        let newVal = fun(arr[i],i,arr);
        newArr.push(newVal);
    }

    return newArr;
}

let arr = [1,2,3,4];

let arr1 = arr.mymap((val,indx,arr)=>{
    console.log("Val:",val,"Indx:",indx,"arr:",arr);
    return val*val
});

console.log(arr1);
