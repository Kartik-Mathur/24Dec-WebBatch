const products = require('../models/products');
const mongoose = require('mongoose');
const users = require('../models/users');

module.exports.getProductsAll = async (req, res, next) => {
    try {
        let all_products = await products.find({});
        res.render('users/products-list', {
            products: all_products
        })
    } catch (err) {
        next(err);
    }
}

module.exports.getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let product = await products.findOne({ _id: new mongoose.Types.ObjectId(id) });
        // console.log(product)
        res.render('users/product-detail', {
            product: product
        })
    } catch (err) {
        next(err);
    }
}

module.exports.getAddToCartById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let cart = req.user.cart;
        let index = -1;
        cart.forEach((item, indx) => {
            if (item.id == id) {
                index = indx;
            }
        })
        if (index == -1) {
            req.user.cart.unshift({
                id: id,
                quantity: 1
            })
        }
        else {
            req.user.cart[index].quantity++;
        }
        req.user.save();
        res.redirect('/user/cart/show');
    } catch (err) {
        next(err);
    }
}

module.exports.getCartShow = async (req, res, next) => {
    try {
        let user = await users.findOne({
            _id: req.user._id
        }).populate('cart.id');

        console.log(user.cart);

        let totalPrice = 0;
        user.cart.forEach((item) => {
            totalPrice += parseInt(item.id.price) * parseInt(item.quantity);
        })
        console.log(user.cart.length)
        res.render('users/cart', {
            cart: user.cart,
            totalPrice,
            cartQuantity: user.cart.length
        });
    } catch (err) {
        next(err);
    }
}

module.exports.getCartDecrease = async (req, res, next) => {
    const { id } = req.query;
    try {
        let user = await users.findOne({
            _id: req.user._id
        }).populate('cart.id');

        console.log(user.cart);

        let totalPrice = 0;
        let newCart = []
        user.cart.forEach((item) => {
            if (item.id._id == id) {
                if (item.quantity > 1) {
                    newCart.push({ ...item, quantity: item.quantity - 1 })
                    totalPrice += parseInt(item.id.price) * parseInt(item.quantity - 1);
                }
            }
            else {
                newCart.push(item);
                totalPrice += parseInt(item.id.price) * parseInt(item.quantity);
            }
        })
        user.cart = newCart;
        user.save();
        console.log(user.cart.length)
        res.send({
            cart: user.cart,
            totalPrice,
            cartQuantity: user.cart.length
        });
    } catch (err) {
        next(err);
    }
}


module.exports.getCartIncrease = async (req, res, next) => {
    const { id } = req.query;
    try {
        let user = await users.findOne({
            _id: req.user._id
        }).populate('cart.id');

        console.log(user.cart);

        let totalPrice = 0;
        let newCart = []
        user.cart.forEach((item) => {
            if (item.id._id == id) {
                newCart.push({ ...item, quantity: item.quantity + 1 })
                totalPrice += parseInt(item.id.price) * parseInt(item.quantity + 1);
            }
            else {
                newCart.push(item);
                totalPrice += parseInt(item.id.price) * parseInt(item.quantity);
            }
        })
        user.cart = newCart;
        user.save();
        console.log(user.cart.length)
        res.send({
            cart: user.cart,
            totalPrice,
            cartQuantity: user.cart.length
        });
    } catch (err) {
        next(err);
    }
}


module.exports.postAddReview = async (req, res, next) => {
    const { productId, review } = req.body;

    try {
        let product = await products.findOne({_id: productId});
        product.reviews.unshift({
            details: review,
            userId: req.user._id
        });
        product.save();
        let user = await users.findOne({
            _id: req.user._id
        });
        res.send({
            reviews: product.reviews,
            user:{
                name: user.name
            }
        });
    } catch (err) {
        next(err);
    }
}
