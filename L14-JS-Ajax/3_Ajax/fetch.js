let url = 'https://cat-fact.herokuapp.com/facts';

fetch(url)
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
        for(let i = 0 ; i < data.length ; i++){
            console.log(data[i].text)
        }
    })
    .catch(err=>{
        console.log(err);
    })