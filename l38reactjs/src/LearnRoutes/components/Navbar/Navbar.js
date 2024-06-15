import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
        <NavLink className={styles['navlink']} to='/'>Home</NavLink>
        <NavLink className={styles['navlink']} to='/about'>About</NavLink>
        <NavLink className={styles['navlink']} to='/orders'>Orders</NavLink>
    </nav>
  )
}

export default Navbar