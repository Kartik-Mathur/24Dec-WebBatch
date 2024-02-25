let btn = document.querySelector('.btn');
let tasklist = document.querySelector('.tasklist');
let inp = document.querySelector('.inp');

btn.addEventListener('click',(ev)=>{
    let task = inp.value;
    let li = document.createElement('li');
    li.innerText = task;
    tasklist.appendChild(li);
    let tasks_db = localStorage.getItem('tasks') || '[]';
    tasks_db = JSON.parse(tasks_db);

    tasks_db.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks_db));
    inp.value = "";
})

function setUp(){
    let tasks_db = localStorage.getItem('tasks');
    tasks_db = JSON.parse(tasks_db);
    tasklist.innerText = '';
    tasks_db.forEach((val)=>{
        let li = document.createElement('li');
        li.innerText = val;
        tasklist.appendChild(li);
    })
}

setUp();