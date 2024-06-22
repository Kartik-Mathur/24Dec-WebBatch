import React, { useRef, useState } from 'react'
import axios from './api/axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const userRef = useRef();
    const passRef = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = async (ev) => {
        ev.preventDefault();
        const userName = userRef.current.value;
        const password = passRef.current.value;

        const response = await axios.post('/login', {
            username: userName,
            password: password,
        })
        console.log(response);
        navigate('/user');
    }

    return (
        <div>
            Login to the app
            <form onSubmit={submitHandler}>
                <label>Username:</label>
                <input
                    type="text"
                    ref={userRef}
                    value={user}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter Username"
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    ref={passRef}
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                />
                <br />
                <button type="submit">Login</button>
            </form>

            <div>
                New User?
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Login