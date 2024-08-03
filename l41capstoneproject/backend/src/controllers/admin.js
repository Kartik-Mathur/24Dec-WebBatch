import Restaurant from "../models/restaurant.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";
import uploadOnCloudinary, { uploadBatchOnCloudinary } from "../utils/uploadOnCloudinary.js";

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








export const postAddFood = responseHandler(async (req, res, next) => {
    const { name, price, veg, description, category, restaurant_name } = req.body;
    try {
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot add food, Restaurant not found");
        }
        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            throw new ErrorHandler(401, "You are not authorised to add food to this restaurant");
        }

        const index = restaurant["cusines"].findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(401, "Cannot add food, Restaurant does not have this category");
        }
        const response = await uploadBatchOnCloudinary(req.files);

        const imageUrl = [];
        for (let i = 0; i < response.length; i++) {
            imageUrl.push({
                "url": response[i].url
            });
        }
        // console.log(imageUrl);
        restaurant["cusines"][index]["food"].push({
            name,
            price,
            veg,
            description,
            images: imageUrl
        })
        await restaurant.save();
        res.status(200).json({
            message: "Food added successfully",
            data: restaurant
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, error.message||"Cannot add food right now!");
    }
})





export const postUpdateFoodItem = responseHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, price, veg, description, category, restaurant_name } = req.body;
    try {
        console.log(restaurant_name)
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
        console.log(restaurant);
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot add food, Restaurant not found");
        }
        if (restaurant.ownerId.toString() !== req.user.userId.toString()) {
            throw new ErrorHandler(401, "You are not authorised to add food to this restaurant");
        }

        const index = restaurant["cusines"].findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(401, "Cannot add food, Restaurant does not have this category");
        }

        const foodIndex = restaurant["cusines"][index]["food"].findIndex((food) => food._id.toString() === id.toString());
        if (foodIndex == -1) {
            throw new ErrorHandler(401, "Cannot add food, Restaurant does not have this food");
        }

        if (name) restaurant["cusines"][index]["food"][foodIndex].name = name;
        if (price) restaurant["cusines"][index]["food"][foodIndex].price = price;
        if (veg) restaurant["cusines"][index]["food"][foodIndex].veg = veg;
        if (description) restaurant["cusines"][index]["food"][foodIndex].description = description;
        await restaurant.save();
        res.status(200).json({
            message: "Food updated successfully",
            data: restaurant
        })

    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, (error.message || "Cannot update food right now!"));
    }

})




export const postDeleteFoodItem = responseHandler(async (req, res, next) => {
    const { id } = req.params;
    const { category, restaurant_name } = req.query;
    try {
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot delete food, Restaurant not found");
        }
        if (restaurant.ownerId.toString() !== req.user.userId.toString()) {
            throw new ErrorHandler(401, "You are not authorised to delete food from this restaurant");
        }
        const index = restaurant["cusines"].findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(401, "Cannot delete food, Restaurant does not have this category");
        }
        const foodIndex = restaurant["cusines"][index]["food"].findIndex((food) =>
            food._id.toString() === id.toString());
        if (foodIndex == -1) {
            throw new ErrorHandler(401, "Cannot delete food, Restaurant does not have this food");
        }
        restaurant["cusines"][index]["food"].splice(foodIndex, 1);
        await restaurant.save();
        res.status(200).json({
            message: "Food deleted successfully",
            data: restaurant
        })
    }
    catch (error) {
        throw new ErrorHandler(error.statusCode || 500, (error.message || "Cannot update food right now!"));
    }
})




export const getAllFoodItems = responseHandler(async (req, res, next) => {
    const { restaurant_name, category } = req.query;
    try {
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
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




export const getFoodItem = responseHandler(async (req, res, next) => {
    const { food_id } = req.params;
    const { restaurant_name, category } = req.query;
    try {
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot get food, Restaurant not found");
        }
        const index = restaurant["cusines"].findIndex((item) => item.category === category);
        if (index == -1) {
            throw new ErrorHandler(401, "Cannot get food, Restaurant does not have this category");
        }
        const food = restaurant["cusines"][index]["food"].find((item) => item.id.toString() === food_id.toString());
        if (!food) {
            throw new ErrorHandler(401, "Cannot get food, Food not found");
        }
        res.status(200).json({
            message: "Food fetched successfully",
            data: food
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, (error.message || "Cannot update food right now!"));
    }

})


export const getAllCusines = responseHandler(async (req, res, next) => {
    const { restaurant_name } = req.query;
    try {
        let restaurant = await Restaurant.findOne({ name: restaurant_name });
        if (!restaurant) {
            throw new ErrorHandler(401, "Cannot get cusines, Restaurant not found");
        }
        res.status(200).json({
            message: "Cusines fetched successfully",
            data: restaurant["cusines"]
        })
    } catch (error) {
        throw new ErrorHandler(error.statusCode || 500, (error.message || "Cannot update food right now!"));

    }
})