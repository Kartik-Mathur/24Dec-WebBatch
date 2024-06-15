import React from 'react'
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Menu />
            <div className={styles['food-container']}>
                <div className={`${styles['food-list']} ${styles['food-container-item']}`}>
                    <Outlet />
                </div>
                <div className={`${styles['food-container-item']}`}>
                    <h1>About Restaurant</h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>

        </>
    )
}

export default Home