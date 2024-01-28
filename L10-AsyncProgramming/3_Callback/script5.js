function download(url, cb) {
    // cb = compress
    console.log("Downloading Starts");
    setTimeout(() => {
        let songName = url.split('/').pop();
        console.log("Downloading Completed",songName);
        cb(songName, upload);
    }, 3000)
}

function compress(songName, cb) {
    // cb = upload
    console.log("Compression Starts");
    setTimeout(() => {
        let compressedSong = songName.split('.')[0] + '.zip';
        console.log("Compression Completed",compressedSong);
        cb(compressedSong, allWorkDone);
    }, 3000)
}

function upload(compressedSong, cb) {
    console.log("Uploading Starts");
    setTimeout(() => {
        console.log("Uploading Completed");
        let newUrl = 'http://newsite.com/'+compressedSong;
        cb(newUrl);
    }, 3000)
}

function allWorkDone(newUrl) {
    console.log("Final URL: ",newUrl);
    console.log("Saara kaam ho gaya complete");
}

let url = 'http://mysite.com/albelatange.mp3';
download(url, compress);