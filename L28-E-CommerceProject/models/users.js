const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    emailId: String,
    cart: [{
        id: {
            type: Schema.Types.ObjectId,
            ref:'products'
        },
        quantity: Number,
    }]
})

module.exports = mongoose.model('users',userSchema);

let usersData = [
    {
        name: "Aayush",
        contactNumber: "9999999999",
        emailId: "ayush@gmail.com",
        cart:[]
    },
    {
        name: "Pinky Bhai",
        contactNumber: "8888888888",
        emailId: "khitij@gmail.com",
        cart:[]
    },
    {
        name: "Sumit",
        contactNumber: "7777777777",
        emailId: "sumit@gmail.com",
        cart:[]
    }
]