Function.prototype.mybind = function(obj,...args){
    let fun = this;
    return function(...args1){
        fun.apply(obj,[...args,...args1]);
    }
}

function fun(city, pincode) {
    console.log("This",this);
    console.log(city);
    console.log(pincode);
}

let obj = {
    name: 'Ruchi',
    hobby: "Beautiful Puke"
};

let f = fun.mybind(obj,"Delhi");
f(110032);