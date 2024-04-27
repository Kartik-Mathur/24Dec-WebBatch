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