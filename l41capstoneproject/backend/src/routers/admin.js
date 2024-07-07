import express from "express";
// import multer from "multer";
import upload from "../middlewares/multer.js";
import { postAddFood, postDeleteCusineCategory, postCusineCategoryAdd, postRestaurant } from "../controllers/admin.js";
// import datauri from "datauri";

// const upload = multer({});

const router = express.Router();
router.post('/register', upload.single('coverImage'), postRestaurant);
router.post('/add-cusine-category', postCusineCategoryAdd);
router.post('/delete-cusine-category', postDeleteCusineCategory);
router.post(
    '/add-food',
    upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'foodimage', maxCount: 8 }]),
    postAddFood);



export default router;