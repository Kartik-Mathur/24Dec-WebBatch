const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String
    },
    description: String,
    date: { type: Date, default: Date.now },
    reviews: [{
        details: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
        // rating: {
        //     type: Number,
        //     min: 1,
        //     max: 5,
        // }
    }],
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productSchema);

let users = [
    {
        name: 'Aayush',
        contactNumber: '9999999999',
        emailId: 'ayush@gmail.com',
        cart: [],
    },
    {
        name: 'Pinky Bhai',
        contactNumber: '8888888888',
        emailId: 'khitij@gmail.com',
        cart: []
    },
    {
        name: 'Sumit',
        contactNumber: '7777777777',
        emailId: 'sumit@gmail.com',
        cart: []
    }
]

