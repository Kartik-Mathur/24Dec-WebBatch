import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            Menu
            <nav className={styles['menu-nav']}>
                <Link className={styles['menu-navlink']} to="northindian">North Indian</Link>
                <Link className={styles['menu-navlink']} to="italian">Italian</Link>
                <Link className={styles['menu-navlink']} to="chinese">Chinese</Link>
            </nav>
        </div>
    )
}

export default Menu