let btn = document.querySelector('#btn');
let body = document.querySelector('body');

function btnClickHandler(ev) {
    console.log("Clicked");
}

btn.addEventListener('click',btnClickHandler);

btn.addEventListener('click', (ev) => {
    console.log("Clicked Function");
})

btn.removeEventListener('click',btnClickHandler);