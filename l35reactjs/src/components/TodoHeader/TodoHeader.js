import React, { useRef } from 'react'

const TodoHeader = ({addTask}) => {

    const inputRef = useRef("");

    function btnHandler(){
        let taskValue = inputRef.current.value;
        addTask(taskValue);
    }

    return (
        <div>
            <input type='text' placeholder='Enter new task' ref={inputRef} />
            <button onClick={btnHandler}> Add </button>
        </div>
    )
}

export default TodoHeader