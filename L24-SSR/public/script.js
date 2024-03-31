const taskList = document.querySelector('.tasklist');
async function onload(){
    let {data } = await axios.get('/todos');
    // console.log(data)
    taskList.innerText = "";
    data.forEach(d=>{
        let li = document.createElement('li');
        li.innerText = d;
        taskList.appendChild(li);
    })

}

onload();