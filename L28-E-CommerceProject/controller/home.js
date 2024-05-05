const Products = require('../models/products');
let {sortCategory} = require('../utils/sortCategory');

module.exports.getHome = async (req, res, next) => {
    try{
        let products = await Products.find();
        let sortedProducts = sortCategory(products);
        res.render('index', {
            products: sortedProducts
        })
    }
    catch(err){
        next(err);
    }
}

module.exports.getLogin = (req,res,next)=>{
    res.render('login');
}


module.exports.getSignup = (req,res,next)=>{
    res.render('signup');
}