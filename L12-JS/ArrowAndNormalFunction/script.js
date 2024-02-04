function helloWorld(){
    console.log(this);
}

let print = ()=>{
    console.log(this);
}

let ruchi = {
    name: "Ruchi"
}

let mehak = {
    name: "Mehak"
}

print.call(ruchi);
print.call(mehak);