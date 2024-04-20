const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin');

router.get('/',adminController.getIndex);
router.get('/addproduct',adminController.getAddProduct);
router.get('/products/all',adminController.getProductsAll);
router.get('/products/:id',adminController.getProductId);
router.get('/products/updateproduct/:id',adminController.getUpdateProduct);
router.get('/products/deleteproduct/:id',adminController.getDeleteProduct);


router.post('/addproduct',adminController.postAddProduct);
router.post('/products/updateproduct',adminController.postUpdateProduct);



module.exports=router;