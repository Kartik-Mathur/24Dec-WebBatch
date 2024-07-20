import express from "express";
// import multer from "multer";
import upload from "../middlewares/multer.js";
import {
    postAddFood,
    postDeleteCusineCategory,
    postCusineCategoryAdd,
    postRestaurant,
    postUpdateFoodItem,
    postDeleteFoodItem,
    getAllFoodItems,
    getAllCusines,
    getFoodItem
} from "../controllers/admin.js";
// import datauri from "datauri";

// const upload = multer({});

const router = express.Router();
router.post('/register', upload.single('coverImage'), postRestaurant);
router.post('/add-cusine-category', postCusineCategoryAdd);
router.post('/delete-cusine-category', postDeleteCusineCategory);
router.post(
    '/add-food-item',
    upload.array('image', 12),
    postAddFood);

router.post('/update-food-item/:id', upload.single('image'), postUpdateFoodItem);
router.get('/delete-food-item/:id', postDeleteFoodItem);
router.get('/get-food-items', getAllFoodItems);
router.get('/get-food-item/:food_id', getFoodItem);
router.get('/get-all-cusines', getAllCusines);

 export default router;