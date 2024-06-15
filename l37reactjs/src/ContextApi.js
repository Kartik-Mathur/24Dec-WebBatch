import React,{createContext} from 'react';
import Grandfather from './components/Grandfather';

const goldContext = createContext();
const placeContext = createContext();

const goldDetails = {
    image: 'https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg',
    price: '10 Crores'
}

const locationDetails = {
    place: 'Goa'
}

const ContextApi = () => {
    return (
        <goldContext.Provider value={goldDetails}>
            <placeContext.Provider value={locationDetails}>
                {/* <Grandfather goldDetails={goldDetails} /> */}
                <Grandfather />
            </placeContext.Provider>
        </goldContext.Provider>
    )
}

export default ContextApi;
export { goldContext, placeContext };