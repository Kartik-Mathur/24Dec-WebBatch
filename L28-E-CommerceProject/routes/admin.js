const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin');

router.get('/',adminController.getIndex);
router.get('/addproduct',adminController.getAddProduct);
router.get('/products/all',adminController.getProductsAll);

router.post('/addproduct',adminController.postAddProduct);


// router.post('/updateproduct',(req,res,next)=>{});
// router.post('/deleteproduct',(req,res,next)=>{});
// router.post('/products:id',(req,res,next)=>{});


module.exports=router;