import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({ restaurant }) => {
    console.log(restaurant);
    let cusinesAvailable = (restaurant?.cusines?.length > 0);
    
    return (
        <div className='restaurant-menu'>
            <div className='restaurant-cusines'>
                {cusinesAvailable && restaurant.cusines.map((item) => <Link>{item.category}</Link>)}
                {!cusinesAvailable && <div>No Cusines Available!</div>}
            </div>
        </div>
    )
}

export default Restaurant
