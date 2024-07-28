import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import FoodItem from './FoodItem';


const RestaurantFood = () => {
    const { category } = useParams();
    const restaurant = useSelector(state => state.activeRestaurantReducer);
    // let FoodItems = restaurant?.cusines.filter(item=>item.category === category);
    // console.log(restaurant);
    const [FoodItems, setFoodItems] = useState([]);
    useEffect(() => {
        const fetchCategoryFood = async () => {
            let { data } = await axios.get(`/app/get-food-items/${restaurant._id}?category=${category}`);
            console.log(data);
            setFoodItems(data.data);
        }

        fetchCategoryFood();
    }, [category])
    return (
        <div>
            {/* <h1>Restaurant Food</h1> */}
            {FoodItems.length>0 &&FoodItems.map((item, indx)=><FoodItem key={indx} food={item} category={category}></FoodItem>)}
            {FoodItems.length<=0 &&<div>Food Items Coming Soon</div>}
        </div>
    )
}

export default RestaurantFood
// 