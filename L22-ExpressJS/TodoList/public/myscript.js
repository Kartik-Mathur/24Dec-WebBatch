const btn = document.querySelector('.btn');
const newtask = document.querySelector('.newtask');
const taskList = document.querySelector('.tasklist');
let items = document.querySelectorAll('.item')

console.log(items)
items.forEach(item=>{
    item.addEventListener('click',(ev)=>{
        console.log("Clicked");
    })
})