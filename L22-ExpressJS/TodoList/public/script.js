const btn = document.querySelector('.btn');
const newtask = document.querySelector('.newtask');
const taskList = document.querySelector('.tasklist');

function addToTaskList(data) {
    console.log(data)
    taskList.innerHTML = '';
    data.forEach(d => {
        let li = document.createElement('li');
        li.innerHTML = `
        <span>${d}</span>
        <div class="btnGroup">
            <button class="upBtn">↑</button>
            <button class="downBtn">↓</button>
            <button class="deleteBtn">❌</button>
        </div>
        `
        li.classList.add('item');
        taskList.appendChild(li);
    })
}

btn.addEventListener('click', async (ev) => {
    ev.preventDefault();
    try {
        let taskName = newtask.value;
        const { data } = await axios.post('/addtask', {
            name: taskName
        });
        addToTaskList(data);
        newtask.value = '';
        /*
        <span>Cricket</span>
        <div class="btnGroup">
            <button class="upBtn">↑</button>
            <button class="downBtn">↓</button>
            <button class="deleteBtn">❌</button>
        </div>
        */

    } catch (err) {
        alert(`Unable to add current task, ${err.message}`)
    }
})

taskList.addEventListener('click',async (ev)=>{
    let item = ev.target;
    if(item.classList.contains('upBtn')){
        let taskName = item.parentElement.previousElementSibling.innerText;
        console.log(taskName);
        let {data} = await axios.get(`/increase?name=${taskName}`);
        addToTaskList(data);
    }
    else if(item.classList.contains('downBtn')){
        let taskName = item.parentElement.previousElementSibling.innerText;
        console.log(taskName);
        let {data} = await axios.get(`/decrease?name=${taskName}`);
        addToTaskList(data);
    }
    else if(item.classList.contains('deleteBtn')){
        let taskName = item.parentElement.previousElementSibling.innerText;
        console.log(taskName);
        let {data} = await axios.get(`/deletetask?name=${taskName}`);
        addToTaskList(data);
    }
})


async function bootTodo(){
    try{
        let {data} = await axios.get('/gettasks');
        addToTaskList(data);
    }catch(err){
        alert(`Unable to add current task, ${err.message}`)
    }
}

bootTodo();