import Restaurant from "../models/restaurant.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";

export const postRestaurant = responseHandler(async (req, res, next) => {
    const { name, address, email, contact } = req.body;
    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields?
    const requiredFields = ["name", "address", "email", "contact"];
    const missingFields = requiredFields.filter((field) => !incomingFields.includes(field));
    // To read image we need to use multer
    if (missingFields.length > 0) {
        // Status codes are necessary to throw errors
        throw new ErrorHandler(401, `Provide missing fields ${missingFields.join(',')} to add a restaurant`);
    }

    // let restaurant;
    try {
        let restaurant = await Restaurant.findOne({
            $or: [
                { name },
                { address }
            ]
        });

        if (restaurant) {
            throw new ErrorHandler(401, `Restaurant with name ${name} or address ${address} already exists`);
        }
    }
    catch (error) {
        throw new ErrorHandler(500, error.message);
    }


    let cloudinaryResponse;
    try {
        cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    } catch (error) {
        throw new ErrorHandler(500, error.message);
    }
    // console.log(req.user);
    try {
        let newRestaurant = await Restaurant.create({
            ownerId: req.user.userId,
            name,
            address,
            email,
            contact,
            coverImage: cloudinaryResponse.url
        });

        // console.log(newRestaurant);
        res.status(201).json({
            success: true,
            message: "Restaurant added successfully",
            data: newRestaurant
        });

    } catch (error) {
        throw new Error(500, "Not able to add restaurant right now!");
    }
})



export const postCusineCategoryAdd = responseHandler(async (req, res, next) => {
    const { categories, restaurant_name } = req.body;

    try {
        let restaurant = await Restaurant.findOne({
            $and: [
                { ownerId: req.user.userId },
                { name: restaurant_name }
            ]
        });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cusine category can't be added, Owner or Restaurant not found");
        }

        let newCusineCategories = categories.split(',');
        newCusineCategories = newCusineCategories.map(c => c.trim().toLowerCase());

        if (!newCusineCategories.length) throw new ErrorHandler(400, "Please provide the valid categories to add");

        let existingCusines = restaurant.cusines;
        if (existingCusines.length) {
            let newCusines = newCusineCategories.filter((cusine) => {
                for (let i = 0; i < existingCusines.length; i++) {
                    if (existingCusines[i].category == cusine) return false;
                }
                return true;
            });
            newCusineCategories = newCusines;
        }

        let newCusines = [];
        for (let i = 0; i < newCusineCategories.length; i++) {
            let category = newCusineCategories[i];
            let newCusine = {
                category,
                food: []
            };
            newCusines.push(newCusine);
        }

        if (newCusines.length) {
            restaurant.cusines = [...newCusines, ...existingCusines];
            restaurant.save();
        }
        res.status(200).json({
            message: "Categories added successfully!",
            data: restaurant
        });

    } catch (error) {
        throw new ErrorHandler(500, "Not able to add cusine category right now!");
    }
})





export const postDeleteCusineCategory = responseHandler(async (req, res, next) => {
    const { categories, restaurant_name } = req.body;

    try {
        let restaurant = await Restaurant.findOne({
            $and: [
                { ownerId: req.user.userId },
                { name: restaurant_name }
            ]
        });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cusine category can't be added, Owner or Restaurant not found");
        }

        let cusineCategories = categories.split(',');
        cusineCategories = cusineCategories.map(c => c.trim().toLowerCase());
        
        if (!cusineCategories.length) throw new ErrorHandler(400, "Please provide the valid categories to delete");

        let existingCusines = restaurant.cusines;
        if (existingCusines.length) {
            let newCusines = existingCusines.filter((cusine) => {
                for (let i = 0; i < cusineCategories.length; i++) {
                    if (cusineCategories[i] == cusine.category) return false;
                }
                return true;
            });
            cusineCategories = newCusines;
        }

        if (cusineCategories.length) {
            restaurant.cusines = cusineCategories;
            restaurant.save();
        }
        res.status(200).json({
            message: "Categories deleted successfully!",
            data: restaurant
        });

    } catch (error) {
        throw new ErrorHandler(500, "Not able to delete cusine category right now!");
    }
})








export const postAddFood = responseHandler(async(req,res,next)=>{
    
})