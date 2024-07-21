import axios from '../utils/axios';
import React, { useRef } from 'react'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const loginHandler = async () => {
        const username = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const { data } = await axios.post('login', { username, password });
            console.log(data);
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }

    return (
        <div>
            <input ref={emailRef} type='text' placeholder='Enter username or email' /> <br />
            <input ref={passwordRef} type='password' placeholder='Enter password' /> <br />
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default Login
