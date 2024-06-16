import React from 'react'
import { useParams } from 'react-router-dom'

const food = [
    {
        id: 1,
        name: "Burger",
        price: 10
    },
    {
        id: 2,
        name: "Pizza",
        price: 15
    },
    {
        id: 3,
        name: "Sandwich",
        price: 8
    }
]

const NorthIndian = () => {
    const params = useParams();
    console.log(params);
    const foodItem = food.find((item) => item.id === parseInt(params.id));

    return (
        <>
        <div>Welcome to the north indian dishes</div>
        {foodItem && <div>NorthIndian - {foodItem.name}, {foodItem.price}</div>}
        </>
    )
}

export default NorthIndian