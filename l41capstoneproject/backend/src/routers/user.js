import express from "express";
import {
    postAddReview,
    postUpdateReview,
    getDeleteReview,
    getAllReviews,
    getReview,
    getRestaurants,
    getRestaurant
} from "../controllers/user.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post('/add-review', upload.array('images', 12), postAddReview);
router.post('/update-review/:reviewId', postUpdateReview);
router.get('/delete-review/:reviewId', getDeleteReview);
router.get('/get-all-reviews', getAllReviews);
router.get('/get-review/:reviewId', getReview);
router.get('/all', getRestaurants);
router.get('/all/:restaurant_id', getRestaurant);

export default router;