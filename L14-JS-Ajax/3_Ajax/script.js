// AJAX KA PEHLA TAREEKA: XMLHTTPREQUEST
let url = 'https://cat-fact.herokuapp.com/facts';

const xhr = new XMLHttpRequest();

// Request ka type set karna hoga
xhr.open("GET",url);

// Request poori hone par data aa jaega
xhr.onload = (data)=>{
    data = data.target.response;
    // console.log(data);
    data = JSON.parse(data);
    // console.log("Data Recieved ",data);
    for(let i = 0 ; i < data.length ; i++){
        console.log(data[i].text)
    }
}

// Request fail hone par
xhr.onerror = (err)=>{
    console.log(err);
}

// Request ko send kardo
xhr.send();