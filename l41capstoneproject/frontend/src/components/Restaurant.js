import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from "../utils/axios";
import { useDispatch } from 'react-redux';

const Restaurant = () => {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = React.useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        const getRestaurantData = async () => {
            let { data } = await axios.get(`/app/all/${restaurant_id}`);
            setRestaurant(data.restaurant);
            dispatch({type: "SET_RESTAURANT",payload: data.restaurant});
        }
        getRestaurantData();
    }, [restaurant_id]);

    return (
        <div className='restaurant-cusines'>
            <div className='cusines-categories'>
                {restaurant?.cusines?.length > 0 && restaurant.cusines.map((item,index) => <Link key={index} to={item.category}>{item.category}</Link>)}
            </div>
            {restaurant?.cusines?.length <= 0 && <div>No Cusines Available!</div>}
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Restaurant
