const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');


// - POST /add-food: add a particular food item
router.post('/add-food', adminController.postAddFood);

// - POST /add-restaurant
router.post('/add-restaurant', adminController.postAddRestaurant);

// - POST /update-food
// router.post('/update-food',(req,res,next)=>{});

// - POST /update-restaurant
// router.post('/update-restaurant',(req,res,next)=>{});   

// - GET /get-foods
// router.get('/get-foods',(req,res,next)=>{})

// - GET /get-restaurants
// router.get('/get-restaurants',(req,res,next)=>{})

// - GET /get-food/:id
// router.get('/get-food/:id',(req,res,next)=>{})

// - GET /get-restaurant/:id
// router.get('/get-restaurant/:id',(req,res,next)=>{})

// - DELETE /delete-food/:id
// router.delete('/delete-food/:id',(req,res,next)=>{})
// - DELETE /delete-restaurant/:id
// router.delete('/delete-restaurant/:id',(req,res,next)=>{})
// - POST /add-order
// router.post('/add-order',(req,res,next)=>{})



module.exports=router;