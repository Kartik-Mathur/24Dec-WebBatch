let form = document.querySelector('.myForm');
let nameElement = document.querySelector('#name');
let password = document.querySelector('#password');

form.addEventListener('submit',(ev)=>{
    // To stop the default behaviour of form we do this
    ev.preventDefault();

    // Input elements ke andar ka data pick krne ke liye we use .value
    let nameVal = nameElement.value;
    let passwordVal = password.value;

    console.log("Form Submit",nameVal,passwordVal);
})