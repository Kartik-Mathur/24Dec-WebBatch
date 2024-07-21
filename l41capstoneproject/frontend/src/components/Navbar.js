import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </div>
    )
}

export default Navbar;
