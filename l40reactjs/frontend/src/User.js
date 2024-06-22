import React, { useEffect } from 'react'
import axios from './api/axios'
import { useNavigate } from 'react-router-dom'

const User = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let { data } = await axios.get('/verify');
            console.log(data);
            if (data.message !== "Success") return navigate('/login');
        })();
    })
    return (
        <div>Welcome user to the App</div>
    )
}

export default User