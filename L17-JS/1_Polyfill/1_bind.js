function fun(city, pincode) {
    console.log(this);
    console.log(city);
    console.log(pincode);
}

let obj = {
    name: 'Ruchi',
    hobby: "Beautiful Puke"
};

let f = fun.bind(obj, "Delhi");
f(110051);