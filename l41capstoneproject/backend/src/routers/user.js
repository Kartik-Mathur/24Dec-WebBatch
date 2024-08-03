import express from "express";
import {
    postAddReview,
    postUpdateReview,
    getDeleteReview,
    getAllReviews,
    getReview,
    getRestaurants,
    getRestaurant,
    getAllFoodItems
} from "../controllers/user.js";
import upload from "../middlewares/multer.js";
import { getAddCart } from "../controllers/cart.js";

const router = express.Router();

router.post('/add-review', upload.array('images', 12), postAddReview);
router.post('/update-review/:reviewId', postUpdateReview);
router.get('/delete-review/:reviewId', getDeleteReview);
router.get('/get-all-reviews', getAllReviews);
router.get('/get-review/:reviewId', getReview);
router.get('/all', getRestaurants);
router.get('/all/:restaurant_id', getRestaurant);

router.get('/get-food-items/:restaurant_id', getAllFoodItems);
// router.get('/get-food-item/:food_id', getFoodItem);
// router.get('/get-all-cusines', getAllCusines);
// router.get("/view-cart", getCartItems)
router.post("/add-to-cart", getAddCart);
// router.get("/increase-cart/:id", getCartItemIncrease);
// router.get("/decrease-cart/:id", getCartItemDecrease);
// router.get("/delete-cart-item/:id", getCartItemDelete);


export default router;