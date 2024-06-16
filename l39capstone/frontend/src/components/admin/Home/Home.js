import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddRestaurant from '../Restaurant/AddRestaurant'

const Home = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/add-restaurant' element={<AddRestaurant />}/>
            </Routes>
        </>
    )
}

export default Home