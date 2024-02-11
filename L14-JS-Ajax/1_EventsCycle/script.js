let grandFather = document.querySelector('.grandFather');
let father = document.querySelector('.father');
let child = document.querySelector('.child');


grandFather.addEventListener('click',(ev)=>{
    console.log("Clicked grandfather");
}, false)

father.addEventListener('click',(ev)=>{
    console.log("Clicked father");
    ev.stopPropagation();
}, false)

child.addEventListener('click',(ev)=>{
    console.log("Clicked child");
}, false)