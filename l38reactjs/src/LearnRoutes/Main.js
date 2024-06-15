import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About'
import Orders from './components/Orders'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    {/* Add routes here */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/orders' element={<Orders />} />
                </Routes>
            </div>
        </>
    )
}

export default Main