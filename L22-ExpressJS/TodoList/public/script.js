const btn = document.querySelector('button');

btn.addEventListener('click',(ev)=>{
    console.log("Clicked")
    fetch('/gettasks')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
})