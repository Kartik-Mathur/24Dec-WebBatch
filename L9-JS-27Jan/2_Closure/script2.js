function funGenerator() {
    let a = 1;
    function innerFun() {
        a++;
        function innerMostFun(){
            a++;
            console.log(a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = funGenerator();
let fun1 = fun();
let fun2 = fun();

fun1();
fun1();
fun2();
fun2();
fun1();