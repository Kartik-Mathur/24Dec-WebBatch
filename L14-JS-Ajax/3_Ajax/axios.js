let url = 'https://cat-fact.herokuapp.com/facts';

axios.get(url)
    .then(data=>{
        console.log(data.data);
        data = data.data;
        for(let i = 0 ; i < data.length ; i++){
            console.log(data[i].text)
        }
    })
    .catch(err=>{
        console.log(err);
    })