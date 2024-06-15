import React from 'react'
import goldKaContext from './store/GoldContext'
import placeContext from './store/PlaceContext'
import Grandfather from './components/Grandfather'

const goldDetails = {
    image: 'https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg',
    price: '10 Crores'
}

const placeDetails = {
    place: 'Goa!!!'
}

const ContextApiAdvanced = () => {
    return (
        <goldKaContext.Provider value={goldDetails}>
            <placeContext.Provider value={placeDetails}>
                <Grandfather />
            </placeContext.Provider>
        </goldKaContext.Provider>
    )
}

export default ContextApiAdvanced