let btn = document.querySelector('button');
let ul = document.querySelector('ul');

// btn.addEventListener('click',()=>{
//     ul.innerHTML += `<li>Hello</li>`;
// })

btn.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.innerText = "Hello";
    ul.appendChild(li);
})