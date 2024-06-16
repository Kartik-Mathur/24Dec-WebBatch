import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../actions/counterAction';


const Counter = () => {
    const dispatch = useDispatch();
    const stateValue = useSelector(state => state);

    return (
        <div>
            <button onClick={() => { dispatch(incrementCounter()) }}>+</button>
            <h1>Counter : {stateValue}</h1>
            <button onClick={() => { dispatch(decrementCounter()) }}>-</button>
        </div>
    )
}

export default Counter