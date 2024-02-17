let listItems = document.querySelectorAll('li');
let list = document.querySelector('.list');
console.log(list);

list.addEventListener('click',(ev)=>{
    console.log(ev.target);
})

/*
for(let i = 0 ; i < listItems.length ; i++){
    // console.log(listItems[i]);
    listItems[i].addEventListener('click',(ev)=>{
        console.log(ev.target.innerText);
    })
}
*/