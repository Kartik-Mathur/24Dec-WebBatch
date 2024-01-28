function badalMaggiLeneGaya(cb){
    console.log("Badal Maggi Lene gaya");
    setTimeout(()=>{
        console.log("Badal Maggi Lekar Laut aaya");

        cb();
    },5000);
}

function mummyMaggibanaDo(){
    console.log("Mummy ne maggi banani start kardi");
    setTimeout(()=>{
        console.log("Mummy ne maggi bana di");
    },5000);
}

badalMaggiLeneGaya(mummyMaggibanaDo);