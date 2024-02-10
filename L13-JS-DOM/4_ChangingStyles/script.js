let btn = document.querySelector('#btn');
let body = document.querySelector('body');

btn.addEventListener('click',(ev)=>{
    let target = ev.target;
    // console.log(ev.target);
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        btn.innerText = 'Light Theme';
    }
    else{
        btn.innerText = 'Dark Theme';
        body.classList.add('light');
        body.classList.remove('dark');
    }
})

// setInterval(() => {
//     body.classList.toggle('dark');
// }, 100);