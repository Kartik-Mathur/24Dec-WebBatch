let btn = document.querySelector('button');
let inp = document.querySelector('input');
let taskList = document.querySelector('.taskList');

let arr = [];
// Part - 2
btn.addEventListener('click',()=>{
    let task = inp.value;
    console.log(task);

    inp.value = "";
    // taskList.innerHTML += `<li>${task}</li>`;
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="up">↑</button>
        <button class="down">↓</button>
        <button class="delete">❌</button>
    `;
    
    arr.push(task);
    taskList.appendChild(li);
    console.log(arr);
})

// Part - 1
/*
btn.addEventListener('click',()=>{
    let task = inp.value;
    console.log(task);

    inp.value = "";
    // taskList.innerHTML += `<li>${task}</li>`;
    let li = document.createElement('li');
    li.innerText = task;
    taskList.appendChild(li);
})
*/