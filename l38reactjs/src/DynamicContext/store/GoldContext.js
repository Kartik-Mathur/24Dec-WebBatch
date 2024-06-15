import React, { createContext } from 'react'

// https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg
const goldDetails = {
    img: 'https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg',
    price: "10 Cr"
}

const goldContext = createContext({
    img: '',
    price: ""
});

const GoldContext = (props) => {

    return (
        <goldContext.Provider value={goldDetails}>
            {props.children}
        </goldContext.Provider>
    )
}

export default GoldContext
export { goldContext }