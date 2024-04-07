const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const articles = require('./database/articles');
const blogDetails = require('./database/blogDetails');
const detailedArticle = require('./database/detailed-article');

app.get('/', (req, res) => {
    let data = [];
    for (let i = 0; i <4; i++) {
        data.push(blogDetails[i]);
    }

    res.render('index', {
        articles,
        blogDetails: data
    });
})

app.get('/data', (req, res) => {
    let { limit, offset } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    if (limit == NaN || offset == NaN) return res.send("Invalid Limit or Offset");
    let data = [];
    for (let i = limit * offset; i < limit * offset + limit; i++)
    res.send(data);
})

app.get('/get-article',(req,res)=>{
    const {no} = req.query;
    let data = detailedArticle[no];
    console.log(data)
    res.render('detailed-article',{
        data
    })
})

/* Pagination Concept
app.get('/data', (req, res) => {
    let { limit, offset } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    if (limit == NaN || offset == NaN) return res.send("Invalid Limit or Offset");
    let data = [];
    console.log(limit*offset,(limit+1)*offset);
    for (let i = limit * offset; i < pagination.length && i < (limit) * offset + limit; i++)
        data.push(pagination[i]);
    res.send(data);
})
*/

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});