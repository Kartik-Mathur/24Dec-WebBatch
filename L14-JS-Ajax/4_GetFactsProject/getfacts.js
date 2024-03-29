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

function getFactsAxios(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(data => {
                // console.log(data.data);
                data = data.data;
                resolve(data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

function getFactsFetch(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res=>res.json())
            .then(data => {

                resolve(data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

function addFactsToList(data) {
    let factList = document.querySelector('.factList');
    factList.innerText = '';
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].text)
        // factList.innerHTML += `<li>${data[i].text}</li>`;
        let li = document.createElement('li');
        li.innerText = data[i].text;
        factList.appendChild(li);
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', (ev) => {
    console.log("Button Click kia");
    getFactsFetch('https://cat-fact.herokuapp.com/facts')
        .then(data => {
            // console.log(data);
            addFactsToList(data);
        })
        .catch(err => {
            console.log(err);
        })
})