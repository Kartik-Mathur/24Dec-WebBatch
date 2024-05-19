import React, { useState } from 'react'
// HOOK 


const UpdateCount = () => {
    let initalCounter = 0;
    // counter ko value milegi jo bhi useState mei pass krenge
    const [counter, setCounter] = useState(initalCounter);
    // counter is a state now
    // setCounter is the only function that can update the 
    // counter value
    // counter variable is immutable: That cannot be modified
    // Doing counter = counter + 1 is invalid operation

    // However we can do this: setCounter(counter+1);

    function increaseCounter() {
        // counter++;
        setCounter(counter+1);
        // console.log(counter)
    }

    function decreaseCounter() {
        if(counter>0){
            setCounter(counter-1);
        }
    }
    return (
        <div>
            <button onClick={decreaseCounter}>Decrease</button>
            Update Counter: {counter}
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default UpdateCount