import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const restaurantSchema = new Schema({
    ownerId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: "String",
        lowercase: true
    },
    address: {
        type: "String",
        lowercase: true,
        unique: true,
    },
    email: {
        type: "String",
        lowercase: true,
        unique: true,
        required: true
    },
    contact: {
        type: "String",
        unique: true,
        required: true
    },
    rating: Number,
    cusines: [
        {
            category: {
                type: "String",
                lowercase: true
            },
            food: [
                {
                    name: String,
                    price: Number,
                    description: String,
                    type: String,
                    images: [
                        {
                            url: String
                        }
                    ]
                }
            ]
        }
    ],
    coverImage: {
        type: "String",
        required: true
    },
    cusineCategories: [
        {
            name: String
        }
    ],
    menu: [
        {
            imageUrl: String
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                default: 1
            },
            images: [
                {
                    imageUrl: String
                }
            ],
            message: {
                type: String
            },
            name: String
        }
    ],
    restaurantStatus: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const restaurant = mongoose.model("Restaurant", restaurantSchema);
export default restaurant;