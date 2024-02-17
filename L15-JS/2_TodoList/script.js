let btn = document.querySelector('button');
let inp = document.querySelector('input');
let taskList = document.querySelector('.taskList');


// Part - 2
btn.addEventListener('click', () => {
    let task = inp.value;
    console.log(task);

    inp.value = "";
    // taskList.innerHTML += `<li>${task}</li>`;
    let li = document.createElement('li');
    li.innerHTML = `
        <div>
            <span class="taskText">${task}</span>
        </div>
        <div>
            <button class="up">↑</button>
            <button class="down">↓</button>
            <button class="delete">❌</button>
        </div>
    `;

    taskList.appendChild(li);
})

taskList.addEventListener('click', (ev) => {
    let item = ev.target;
    if (item.classList.contains('up')) {
        let parentElement = item.parentElement.parentElement;
        console.log(parentElement);
        let uparWalaElement = parentElement.previousElementSibling;
        taskList.insertBefore(parentElement, uparWalaElement);
    }
    else if (item.classList.contains('down')) {
        let parentElement = item.parentElement.parentElement;
        console.log(parentElement);
        let neecheWalaElement = parentElement.nextElementSibling;
        console.log(neecheWalaElement);
        taskList.insertBefore(neecheWalaElement, parentElement);
    }
    else if (item.classList.contains('delete')) {
        let parentElement = item.parentElement.parentElement;
        console.log(parentElement);
        parentElement.remove();
    }
    else if(item.classList.contains('taskText')){
        console.log(item.innerText);
        item.setAttribute('contenteditable',"true");
    }
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