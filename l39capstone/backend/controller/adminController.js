const Restaurant = require('../models/restaurant');
// image, price, name, restaurant_id, cuisineName(Italian, Chinese), description
module.exports.postAddFood = async (req, res, next) => {
    let {
        image,
        price,
        name,
        restaurant_id,
        cuisineName,
        description
    } = req.body;

    restaurant_id = "666ee5382cbadb2e8753d3b6";
    try {
        const restaurant = await Restaurant.findById(restaurant_id);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }

        const cuisineCategory = restaurant.cuisineCategory;
        let cuisineIndex = -1;
        for (let i = 0; i < cuisineCategory.length; i++) {
            if (cuisineCategory[i].cuisineName === cuisineName) {
                cuisineIndex = i;
                break;
            }
        }
        if (cuisineIndex === -1) {
            cuisineCategory.push({
                cuisineName,
                foodList: []
            })
            cuisineIndex = cuisineCategory.length - 1;
        }

        cuisineCategory[cuisineIndex].foodList.push({
            image,
            price,
            name,
            description
        })
        await restaurant.save();
        res.status(201).json({
            message: "Food added successfully",
            food: restaurant.cuisineCategory
        });

    } catch (err) {
        res.status(400).json({
            msg: "Not able to add new food to the restaurant"
        })
    }


}

// image, name, location, rating([{ userId: String, userName: String, value: Number }]), food: []
module.exports.postAddRestaurant = async (req, res, next) => {
    let { image, name, location } = req.body;
    try {
        await Restaurant.create({
            image,
            name,
            location
        })
        res.status(200).send({
            msg: 'Restaurant Added Successfully'
        })
    } catch (err) {
        res.status(400).json({
            msg: 'Unable to add restaurant, try again!'
        })
    }
}