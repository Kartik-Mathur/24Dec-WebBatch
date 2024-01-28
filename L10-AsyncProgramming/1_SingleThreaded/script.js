function oneSecondDelay(){
    let t1 = new Date().getTime();
    while(new Date().getTime() < t1 + 1000){

    }
}

function delayNSec(n){
    for(let i = 0 ; i < n ; i++) oneSecondDelay();
}

delayNSec(5);
console.log("Hello How are u?");