Array.prototype.myReduce = function(fun, initVal){
    // fun = (acc,val,indx,arr)=>{
    //     return acc + val;
    // }
    let arr = this; // [1,2,3,4,5]
    let acc;
    if(initVal != undefined) {
        acc = initVal;
        indx = 0;
    }
    else{
        indx = 1;
        acc = arr[0];
    }

    for(let i = indx ; i < arr.length ; i++){
        acc = fun(acc,arr[i],i,arr);
    }
    return acc;
}

let arr = [1,2,3,4,5];

let ans = arr.myReduce((acc,val,indx,arr)=>{
    return acc * val;
}, 1);

console.log(ans);