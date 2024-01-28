function download(cb){
    // cb = compress
    console.log("Downloading Starts");
    setTimeout(()=>{
        console.log("Downloading Completed");
        cb(upload);
    },3000)
}

function compress(cb){
    // cb = upload
    console.log("Compression Starts");
    setTimeout(()=>{
        console.log("Compression Completed");
        cb(allWorkDone);
    },3000)
}

function upload(cb){
    console.log("Uploading Starts");
    setTimeout(()=>{
        console.log("Uploading Completed");
        cb();
    },3000)
}

function allWorkDone(){
    console.log("Saara kaam ho gaya complete");
}

download(compress);