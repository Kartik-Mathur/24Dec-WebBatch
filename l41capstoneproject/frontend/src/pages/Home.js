import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const userData =  useSelector(state=>state.userReducer);
    
  return (
    <div>
      <div>{userData.name}</div>
      <div>{userData.email}</div>
      <div>{userData.username}</div>
      <img src={userData.image} />
    </div>
  )
}

export default Home
