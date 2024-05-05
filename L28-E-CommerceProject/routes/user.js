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
router.post('/signup',userController.postSignUp);

module.exports=router;

// let users = [
//     {
//       _id: ObjectId('662cc7728e6a3279089c0ce9'),
//       name: 'Aayush',
//       contactNumber: '9999999999',
//       emailId: 'ayush@gmail.com',
//       cart: [
//         {
//           id: ObjectId('662cc8541f9cc59959f5f061'),
//           quantity: 1,
//           _id: ObjectId('662ccf139580abc11d3553a5')
//         }
//       ],
//       role: "user"
//     },
//     {
//       _id: ObjectId('662cc7728e6a3279089c0cea'),
//       name: 'Pinky Bhai',
//       contactNumber: '8888888888',
//       emailId: 'khitij@gmail.com',
//       cart: [],
//       role: "user"
//     },
//     {
//       _id: ObjectId('662cc7728e6a3279089c0ceb'),
//       name: 'Sumit',
//       contactNumber: '7777777777',
//       emailId: 'sumit@gmail.com',
//       cart: [],
//       role: "user"
//     }
//   ]