import axios from '../utils/axios';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom';

const Restaurants = ({ currentRestaurant }) => {
    const restaurantData = useSelector(state => state.restaurantReducer);
    const btnClickHandler = async (ev) => {
        let { data } = await axios.get(`/app/restaurant/${ev.target.id}`);
        currentRestaurant(data.restaurant);
    }
    console.log("Restaurant Data", restaurantData);
    return (
        <div className='restaurant-names'>
            {restaurantData.map((restaurant, index) => (
                <button id={restaurant._id} onClick={btnClickHandler} key={index}>
                    <Link to={restaurant._id}>{restaurant.name}</Link>
                </button>
            ))}

            <Outlet />
        </div>
    )
}

export default Restaurants
