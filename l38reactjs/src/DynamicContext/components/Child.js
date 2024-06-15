import React, { useContext } from 'react'
import { goldContext } from '../store/GoldContext';
const Child = () => {
    const goldDetails = useContext(goldContext);
    return (
        <div>
            Child
            <img src={goldDetails.img} />
            <div>Price: {goldDetails.price}</div>
        </div>
    )
}

export default Child