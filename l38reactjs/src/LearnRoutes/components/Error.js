import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 Error</h1>
            <button onClick={() => { navigate(-1) }}>Go Back</button>
            <button onClick={() => { navigate("/") }}>Go To Home</button>
        </div>
    )
}

export default Error