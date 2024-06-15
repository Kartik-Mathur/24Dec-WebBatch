import React, { useContext } from 'react'
// import goldContext from '../store/GoldContext';

import placeContext from '../store/PlaceContext';
import {goldKaContext} from '../store/GoldDynamicContext';

const Child = () => {
    const goldDetails = useContext(goldKaContext);
    const placeDetails = useContext(placeContext);

    return (
        <div>
            <h2>I am a child component</h2>
            <div>Gold Details: {goldDetails.price}</div>
            <div>Place Details: {placeDetails.place}</div>
            <img src={goldDetails.image} />
        </div>
    );
}

/* // Old way of doing it
const Child = ({ goldDetails }) => {
    return (
        <div>
            <goldContext.Consumer>
                {(data) => {
                    return <placeContext.Consumer>
                        {(data1) => {
                            return <>
                                <h1>Child Component</h1>
                                <div>Gold Details: {data.price}</div>
                                <div>Gold Details: {data1.place}</div>
                                <img src={data.image} />
                            </>
                        }}
                    </placeContext.Consumer>

                }}
            </goldContext.Consumer>
        </div>
        // <div>
        //     <h2>Child Component</h2>
        //     <img src={goldDetails.image} />
        //     <div>{goldDetails.price}</div>
        // </div>
    )
}
*/
export default Child