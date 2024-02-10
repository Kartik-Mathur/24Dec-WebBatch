let btn = document.querySelector('#btn');
let body = document.querySelector('body');

btn.onclick = ()=>{
    console.log("Clicked BTN");
}

btn.onclick = ()=>{
    console.log("Clicked BTN Function");
}

// body.onkeypress = (event)=>{
body.onkeydown = (event) => {
// body.onkeyup = (event) => {
    // console.log(event)
    console.log("Pressed Key: ", event.key);
}