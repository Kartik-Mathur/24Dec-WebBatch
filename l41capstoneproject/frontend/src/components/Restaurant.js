import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "../utils/axios";

const Restaurant = () => {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = React.useState({});

    useEffect(() => {
        const getRestaurantData = async () => {
            let { data } = await axios.get(`/app/all/${restaurant_id}`);
            setRestaurant(data.restaurant);
        }
        getRestaurantData();
    }, [restaurant_id]);

    return (
        <div className='restaurant-cusines'>
            <div className='cusines-categories'>
                {restaurant?.cusines?.length > 0 && restaurant.cusines.map((item) => <Link to={}>{item.category}</Link>)}
            </div>
            {restaurant?.cusines?.length <= 0 && <div>No Cusines Available!</div>}
        </div>
    )
}

export default Restaurant
