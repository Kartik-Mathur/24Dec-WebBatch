function badalCollegeGaya(cb){
    // cb = badalMaggiLeneGaya
    console.log("Badal College Gaya");
    setTimeout(()=>{
        console.log("Badal College se aa gaya");
        cb(mummyMaggibanaDo);
    },5000);
}

function badalMaggiLeneGaya(cb){
    // cb = mummyMaggibanaDo
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

badalCollegeGaya(badalMaggiLeneGaya);