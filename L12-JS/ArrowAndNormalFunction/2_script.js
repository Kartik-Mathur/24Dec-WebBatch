// function Person(){
//     console.log("Inside Person: ",this);
//     let print = ()=>{
//         console.log("Inside Print: ",this);
//     }
//     print();
// }

function Person(){
    console.log("Inside Person: ",this);
    function print(){
        console.log("Inside Print: ",this);
    }
    print();
}

let ruchi = {
    name: "Ruchi"
}

let mehak = {
    name: "Mehak"
}

Person.call(ruchi);
Person.call(mehak);