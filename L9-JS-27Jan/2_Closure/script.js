function funGenerator() {
    let a = 1;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;
}

let fun = funGenerator();
fun(); // 2
fun(); // 3
fun(); // 4

let fun1 = funGenerator();
fun1(); // 2
fun1(); // 3
fun1(); // 4