let id = setInterval(()=>{
    console.log("Bikaner se Khana aa gaya");
},3000);

let id1 = setInterval(()=>{
    console.log("Haldiram se Khana aa gaya");
},10);

setTimeout(()=>{
    clearInterval(id1);
},1000);

setTimeout(()=>{
    clearInterval(id);
},500);

console.log(id);