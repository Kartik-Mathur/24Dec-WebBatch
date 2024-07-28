import ErrorHandler from "../utils/ErrorHandler.js";
import Restaurant from "../models/restaurant.js";
import { responseHandler } from "../utils/responseHandler.js";
import { uploadBatchOnCloudinary } from "../utils/uploadOnCloudinary.js";
import { resolve } from "path/win32";

export const postAddReview = responseHandler(async (req, res, next) => {
    const { restaurant_name, rating, message } = req.body;
    const { userId, name } = req.user;
    console.log(restaurant_name, rating, message, userId, name);
    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found");
        }

        if (userId.toString() === restaurant.ownerId.toString()) {
            throw new ErrorHandler(400, "You can't review your own restaurant");
        }

        if (Number(rating) < 1 || Number(rating) > 5) {
            throw new ErrorHandler(400, "Rating must be between 1 and 5");
        }
        const response = await uploadBatchOnCloudinary(req.files);
        const imageUrl = [];
        for (let i = 0; i < response.length; i++) {
            imageUrl.push({
                "url": response[i].url
            });
        }

        const review = {
            username: name,
            rating: +rating,
            message,
            userId,
            images: imageUrl,
        };
        restaurant.reviews.push(review);
        await restaurant.save();
        res.status(201).json({
            success: true,
            message: "Review added successfully",
            review,
        });
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }


})



export const postUpdateReview = responseHandler(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name } = req.body;
    const { rating, message } = req.body;
    const { userId } = req.user;
    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }
        if (userId.toString() !== restaurant["reviews"][index].userId.toString()) {
            throw new ErrorHandler(401, "You are not authorized to update this review");
        }

        if (Number(rating) < 1 || Number(rating) > 5) {
            throw new ErrorHandler(400, "Rating must be between 1 and 5");
        }

        if (rating) restaurant["reviews"][index].rating = +rating;
        if (message) restaurant["reviews"][index].message = message;
        await restaurant.save();
        res.status(200).json({
            success: true,
            message: "Review updated successfully",
            restaurant,
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})




export const getDeleteReview = responseHandler(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name } = req.query;
    const { userId } = req.user;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }
        if (userId.toString() !== restaurant["reviews"][index].userId.toString()) {
            throw new ErrorHandler(401, "You are not authorized to update this review");
        }
        await restaurant["reviews"].splice(index, 1);
        await restaurant.save();
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
            restaurant,
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }

})


export const getAllReviews = responseHandler(async (req, res, next) => {
    const { restaurant_name } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }

        res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            reviews: restaurant["reviews"],
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})






export const getReview = responseHandler(async (req, res, next) => {
    const { reviewId } = req.params;
    const { restaurant_name } = req.query;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(404, "Restaurant not found to update the review");
        }
        const index = restaurant["reviews"].findIndex(r => r._id.toString() == reviewId.toString());
        if (index === -1) {
            throw new ErrorHandler(404, "Review not found, that you are trying to update");
        }

        res.status(200).json({
            success: true,
            message: "Review fetched successfully",
            review: restaurant["reviews"][index]
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})





async function giveDelay() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}


export const getRestaurants = responseHandler(async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find({});


        if (!restaurants) {
            throw new ErrorHandler(404, "No Restaurants found!");
        }

        res.status(200).json({
            success: true,
            message: "Restaurants fetched successfully",
            restaurants
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})



export const getRestaurant = responseHandler(async (req, res, next) => {
    const {restaurant_id} = req.params;
    try {
        const restaurant = await Restaurant.findOne({_id: restaurant_id});
        if (!restaurant) {
            throw new ErrorHandler(404, "No Restaurants found!");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant fetched successfully",
            restaurant
        });

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message);
    }
})



export const getAllFoodItems = responseHandler(async (req, res, next) => {
    let {restaurant_id} = req.params;
    const { category } = req.query;
    try {
        let restaurant = await Restaurant.findOne({ _id: restaurant_id });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot get food, Restaurant not found");
        }
        const index = restaurant["cusines"].findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(401, "Cannot get food, Restaurant does not have this category");
        }
        res.status(200).json({
            message: "Food fetched successfully",
            data: restaurant["cusines"][index]["food"]
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, (error.message || "Cannot update food right now!"));
    }
})