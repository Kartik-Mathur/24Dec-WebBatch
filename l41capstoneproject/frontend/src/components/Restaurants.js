import axios from '../utils/axios';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom';

const Restaurants = ({ currentRestaurant }) => {

    const restaurantData = useSelector(state => state.restaurantReducer);

    console.log("Restaurant Data", restaurantData);
    return (
        <>
            <div className='restaurant-names'>
                {restaurantData.map((restaurant, index) => (
                    <button id={restaurant._id} key={index}>
                        <Link to={restaurant._id}>{restaurant.name}</Link>
                    </button>
                ))}
            </div>
            <Outlet />
        </>
    )
}

export default Restaurants
