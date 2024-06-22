import React, { useEffect, useRef, useState } from 'react'
import axios from './api/axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const userRef = useRef();
    const navigate = useNavigate();
    const passRef = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);

    const submitHandler = async (ev) => {
        ev.preventDefault();
        const userName = userRef.current.value;
        const password = passRef.current.value;

        const response = await axios.post('/signup', {
            username: userName,
            password: password
        })
        setSuccess(true);
        navigate('/login');
    }

 

    return (
        <>
            {
                success
                    ?
                    (<div>
                        <h1>Account created successfully!</h1>
                        <Link to="/login">Login</Link>
                    </div>)
                    :
                    (<div>
                        Signup
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
                            <button type="submit">Sign up</button>
                        </form>

                        <div>
                            Already Registered?
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                    )
            }
        </>
    );
}

export default Signup