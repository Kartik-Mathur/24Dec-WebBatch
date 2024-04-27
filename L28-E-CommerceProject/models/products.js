const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    seller: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    imageUrl: {
        type:String
    },
    description: String,
    date: { type: Date, default: Date.now },
    reviews: [{
        details: String,
        rating: {
            type: Number,
            min: 1,
            max: 5,
        }
    }],
    category:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products',productSchema);


let products=[
    {
        name:'Decathalon',
        price:1000,
        seller:"Myntra",
        description:"Men Running Shoes",
        imageUrl:"https://contents.mediadecathlon.com/p2153179/e958b22d2eccd9c7db0fea1da358fd8f/p2153179.jpg?format=auto&quality=70&f=650x0",
        category:"Shoes"

    }, {
        name:'Nike',
        price:3000,
        seller:"Myntra",
        description:"Nike Dunk High By You Custom Men's Shoes",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CUqUQcQiiTz0M7ELPWwX5CWu0lbBHvT895HWlC2K3g&s",
        category:"Shoes"

    }, {
        name:'Campus',
        price:1200,
        seller:"Flipkart",
        description:"Men Running Shoes",
        imageUrl:"https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
        category:"Shoes"

    }, {
        name:'Adidas',
        price:5000,
        seller:"Myntra",
        description:"Sneakers",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPGwj5mcP5c24Lv2_UnAGEGI9pKuOaQhSlVsyRBr_Mw&s",
        category:"Shoes"

    }, {
        name:'Jordan',
        price:7000,
        seller:"Myntra",
        description:"Sky Blue Leather Nike Jordan Shoes,",
        imageUrl:"https://5.imimg.com/data5/ANDROID/Default/2021/7/AR/VC/EC/36086933/product-jpeg.jpg",
        category:"Shoes"

    }

]