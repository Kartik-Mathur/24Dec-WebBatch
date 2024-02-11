function getFacts(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // Request ka type set karna hoga
        xhr.open("GET", url);

        // Request poori hone par data aa jaega
        xhr.onload = (data) => {
            data = data.target.response;
            // console.log(data);
            data = JSON.parse(data);
            resolve(data);
        }

        // Request fail hone par
        xhr.onerror = (err) => {
            reject(err);
        }

        // Request ko send kardo
        xhr.send();
    })
}


