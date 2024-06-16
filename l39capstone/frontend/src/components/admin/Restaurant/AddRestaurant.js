import React, { useRef, useState } from 'react'
import axios from 'axios'
import styles from './AddRestaurant.module.css';
import { useNavigate } from 'react-router-dom';

const AddRestaurant = () => {
    const restaurantNameRef = useRef();
    const restaurantLocationRef = useRef();
    const restaurantImageUrlRef = useRef();
    const navigate = useNavigate();

    const [restaurantIsValid, setRestaurantIsValid] = useState(null);

    const formSubmitHandler = async (ev) => {
        ev.preventDefault();
        console.log("Submitting Form")
        const restaurantName = restaurantNameRef.current.value;
        const restaurantLocation = restaurantLocationRef.current.value;
        const restaurantImageUrl = restaurantImageUrlRef.current.value;
        if (restaurantName.trim() == 0 || restaurantImageUrl.trim() == 0 ||
            restaurantLocation.trim() == 0) {
            setRestaurantIsValid(false);
            return;
        }
        setRestaurantIsValid(true);
        try {
            let msg = await axios.post('http://localhost:4444/admin/add-restaurant', {
                name: restaurantName,
                location: restaurantLocation,
                image: restaurantImageUrl
            })
            console.log(msg)
            navigate('/admin/all-restaurant');
        }
        catch (err) {
            console.log(err)
        }
    }

    const validateInputField = () => {
        const restaurantName = restaurantNameRef.current.value;
        const restaurantLocation = restaurantLocationRef.current.value;
        const restaurantImageUrl = restaurantImageUrlRef.current.value;
        if (restaurantName.trim() == 0 || restaurantImageUrl.trim() == 0 ||
            restaurantLocation.trim() == 0)
            setRestaurantIsValid(false);
        else setRestaurantIsValid(true);
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <input
                    type='text'
                    className={restaurantIsValid ? styles['validField'] : styles['invalidField']}
                    ref={restaurantNameRef}
                    onBlur={validateInputField}
                    placeholder='Enter Restaurant Name'
                />

                <input
                    type='text'
                    className={restaurantIsValid ? styles['validField'] : styles['invalidField']}
                    ref={restaurantLocationRef}
                    onBlur={validateInputField}
                    placeholder='Enter Restaurant Location'
                />

                <input
                    type='text'
                    className={restaurantIsValid ? styles['validField'] : styles['invalidField']}
                    ref={restaurantImageUrlRef}
                    onBlur={validateInputField}
                    placeholder='Enter Restaurant imageUrl'
                />

                <button>Add</button>
            </form>

        </>
    )
}

export default AddRestaurant