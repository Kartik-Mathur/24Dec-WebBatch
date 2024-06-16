import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
        <NavLink className={styles['navbar-item']} to="/add-restaurant">Add New Restaurant</NavLink>
        <NavLink className={styles['navbar-item']} to="/add-food">Add New Restaurant</NavLink>
    </nav>
  )
}

export default Navbar