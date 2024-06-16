import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../actions/counterAction';


const Counter = () => {
    const stateValue = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(incrementCounter) }}>+</button>
            <h1>Counter : {stateValue}</h1>
            <button onClick={() => { dispatch(decrementCounter) }}>-</button>
        </div>
    )
}

export default Counter