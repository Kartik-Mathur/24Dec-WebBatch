// 1st Way of creating promises
let url = 'http://example.com/movie.mp4';

let p = new Promise((resolve,reject)=>{
    // resolve and reject both are functions
    let movieName = url.split('/').pop();
    let movieExtension = movieName.split('.').pop();

    if(['mp4','mkv'].indexOf(movieExtension) == -1){
        reject("It is not a correct format file"); // Movie download nahi ho paegi
    }
    else{
        resolve("Ho gai download enjoy");
    }
})

// p.then(resolve).catch(reject);

p.then((msg)=>{
    console.log(msg)
})
.catch((errMsg)=>{
    console.log(errMsg)
})

// Alternative way
// p.then(resolve,reject);

