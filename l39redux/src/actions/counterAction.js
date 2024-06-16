const incrementCounter = ()=>{
    return {
        type: 'counter/increment'
    }
}

const decrementCounter = ()=>{
    return {
        type: 'counter/decrement'
    }
}

export {incrementCounter,decrementCounter};