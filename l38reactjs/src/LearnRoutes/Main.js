import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About'
import Orders from './components/Orders'
import Error from './components/Error'
import Chinese from './components/Menu/Chinese'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    {/* Add routes here */}
                    <Route path='/home' element={<Home />}>
                        <Route path='northindian'/>
                        <Route path='italian'/>
                        <Route path='chinese' element={<Chinese />}/>
                    </Route>
                    <Route path='/about' element={<About />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div>
        </>
    )
}

export default Main