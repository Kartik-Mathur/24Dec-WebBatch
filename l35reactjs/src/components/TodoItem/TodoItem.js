import React from 'react'
import todoCss from './TodoItem.module.css';

const TodoItem = ({todo,deleteTaskHandler}) => {

    function deleteTodoHandler(ev){
        deleteTaskHandler(ev.target.parentElement.previousElementSibling.innerText);
    }

  return (
    <div className={todoCss['todoItem']}>
        <span className={todoCss['todoText']}>{todo}</span>
        <span className={todoCss['btnGroup']}>
            <button className={todoCss['button']}>↑</button>
            <button className={todoCss['button']}>↓</button>
            <button className={todoCss['button']} onClick={deleteTodoHandler}>❌</button>
        </span>
    </div>
  )
}

export default TodoItem