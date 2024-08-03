import axios from '../utils/axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom';

const Restaurants = ({ currentRestaurant }) => {

    const restaurantData = useSelector(state => state.restaurantReducer);
    const initialId = restaurantData[0]._id || "";
    const [activeRestaurantId, setActiveRestaurantId] = useState(initialId);
    // console.log("Restaurant Data", restaurantData);
    return (
        <>
            <div className='restaurant-names'>
                {restaurantData.map((restaurant, index) => (
                    <Link key={index} className='restaurant-names-link' to={restaurant._id}>
                        <button
                            className={(restaurant._id === activeRestaurantId) ? "className=restaurant-name-btn isActive" : "className=restaurant-name-btn"}
                            onClick={() => {
                                setActiveRestaurantId(restaurant._id);
                            }}
                            id={restaurant._id}
                            
                        >
                            {restaurant.name}
                        </button>
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    )
}

export default Restaurants
