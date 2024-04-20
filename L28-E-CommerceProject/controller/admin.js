const mongoose= require('mongoose');
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
        // console.log(allProducts)
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


module.exports.getProductId = async (req,res,next)=>{
    let id = req.params.id;
    try{
        let p = await products.findOne({_id:new mongoose.Types.ObjectId(id)});
        console.log(p)
        res.render('admin/product-detail',{
            product: p
        })
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }
}

module.exports.getUpdateProduct = async (req,res,next)=>{
    let id = req.params.id;
    try{
        let p = await products.findOne({_id:new mongoose.Types.ObjectId(id)});
        console.log(p)
        res.render('admin/update-product',{
            product: p
        })
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }

}



module.exports.postUpdateProduct = async (req,res,next)=>{
    try{
        const {name,price,seller,imageUrl,description,id} = req.body;

        const product = await products.findOne({_id:new mongoose.Types.ObjectId(id)});
        product.name = name;
        product.price = price;
        product.seller = seller;
        product.imageUrl = imageUrl;
        product.description = description;
        product.save();

        res.render('admin/product-detail',{
            product
        })
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }
}

module.exports.getDeleteProduct = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const product = await products.deleteOne({_id:new mongoose.Types.ObjectId(id)});
        res.redirect('/admin/products/all');
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }
}