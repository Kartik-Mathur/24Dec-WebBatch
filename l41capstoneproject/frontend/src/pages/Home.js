import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../utils/axios';
import Restaurants from '../components/Restaurants.js';
import Restaurant from '../components/Restaurant.js';
import Spinner from "../components/Spinner.js";
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    // const userData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [fetchedRestaurantData, setFetchedRestaurantData] = useState(false);
    
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        async function getRestaurantDetails() {
            let { data } = await axios.get('/app/all');
            console.log("Data", data)
            dispatch({ type: "SET_RESTAURANTS", payload: data.restaurants });
            setFetchedRestaurantData(true);
        }

        getRestaurantDetails();
    }, []);

    // function currentRestaurant(data) {
    //     setRestaurant(data);
    // }

    return (
        <>
        {/* <Link to='all'>All Restaurants</Link> */}
        <div className='restaurant-details'>
            {!fetchedRestaurantData && <Spinner />}
            {fetchedRestaurantData && <Restaurants />}
            {/* {fetchedRestaurantData && <Restaurant restaurant={restaurant}></Restaurant>} */}
        </div>
        </>
    )
}

export default Home
