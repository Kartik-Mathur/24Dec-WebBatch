function download(cb){
    console.log("Download Started");
    setTimeout(()=>{
        cb();
    },2000);
}

function compress(cb){
    console.log("Compression Starts");
    setTimeout(()=>{
        cb();
    },2000);
}

function upload(cb){
    console.log("Uploading Starts");
    setTimeout(()=>{
        cb();
    },2000);
}

download(()=>{
    console.log("Download Completes");
    compress(()=>{
        console.log("Compression Completes");
        upload(()=>{
            console.log("Uploading Completes");
        })
    })
})