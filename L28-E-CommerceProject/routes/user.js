const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/user');
router.get('/products/all',userController.getProductsAll);
router.get('/products/:id',userController.getProductById);
router.get('/cart/add/:id',userController.getAddToCartById);
router.get('/cart/show',userController.getCartShow);
router.get('/cart/decrease',userController.getCartDecrease);
router.get('/cart/increase',userController.getCartIncrease);
router.post('/review/add',userController.postAddReview);

module.exports=router;