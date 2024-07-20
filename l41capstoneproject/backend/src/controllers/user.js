import ErrorHandler from "../utils/ErrorHandler.js";
import Restaurant from "../models/restaurant.js";
import { responseHandler } from "../utils/responseHandler.js";
import { uploadBatchOnCloudinary } from "../utils/uploadOnCloudinary.js";

export const postAddReview = responseHandler(async (req, res, next) => {
    const { restaurant_name, rating, message } = req.body;
    const { userId, name } = req.user;

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