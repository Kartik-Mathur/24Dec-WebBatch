const products = require('../models/products');

module.exports.postAddProduct = async (req,res,next)=>{
    const {name,price,seller,imageUrl,description} = req.body;
    try{
        await products.create({
            name,
            price,
            seller,
            imageUrl,
            description
        });
        res.redirect('/admin/products/all');
    }catch(err){
        // req.flash('msg','Error Adding a New Product');
        next(err);
    }
}

module.exports.getProductsAll = async (req,res,next)=>{
    try{
        let allProducts = await products.find();
        console.log(allProducts)
        res.render('admin/products-list',{
            products: allProducts
        })
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }
}

module.exports.getIndex=(req,res,next)=>{
    res.render('admin/home');
}


module.exports.getAddProduct=(req,res,next)=>{
    res.render('admin/add-product');
}