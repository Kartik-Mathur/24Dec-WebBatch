import React from 'react'
import { createContext } from "react";

const goldKaContext = createContext({
  image: '',
  price: ''
});

const goldDetails = {
  image: 'https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg',
  price: '10 Crores'
}

const GoldDynamicContext = (props) => {
  // const children = props.children;// <Grandfather />

  return (
    <goldKaContext.Provider value={goldDetails}>
      {props.children}
    </goldKaContext.Provider>
  )
}

export default GoldDynamicContext
export {goldKaContext}