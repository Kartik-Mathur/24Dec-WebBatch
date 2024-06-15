import React from 'react'
import styles from './Chinese.module.css'

const chineseFood = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSodh2_bz3T_LLA16yP9WdpyAoAUkC5-TdA&s',
        price: 100,
        name: "Noodles"
    },
    {
        img: 'https://s.yimg.com/ny/api/res/1.2/rynSrXCHZhJETjrOxH7dsw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2MQ--/https://media.zenfs.com/en/purewow_185/92edaaf2226c3de6eac85bec468ce7c6',
        price: 200,
        name: "Dumplings"
    },
    {
        img: 'https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/16.jpg?tr=w-3840,q-50',
        price: 50,
        name: "Chilli Potato"
    },
    {
        img: 'https://i.insider.com/5c0192d1de34c43da26049d4?width=700',
        price: 10,
        name: 'Spring Roll'
    }
]

const Chinese = () => {
    return (
        <>
            {
                chineseFood.map((food) => <div>
                    <img className={styles['food-img']} src={food.img} alt={food.name} />
                    <h3>{food.name}</h3>
                    <p>Price: ₹{food.price}</p>
                </div>)
            }
        </>
    )
}

export default Chinese