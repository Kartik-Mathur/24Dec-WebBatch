const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3000;

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const articles = require('./database/articles');
const pagination = require('./database/pagination');

app.get('/',(req,res)=>{
    res.render('index',{
        articles
    });
})

app.get('/data',(req,res)=>{
    let {limit, offset} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    if(limit == NaN || offset == NaN) return res.send("Invalid Limit or Offset");
    
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});