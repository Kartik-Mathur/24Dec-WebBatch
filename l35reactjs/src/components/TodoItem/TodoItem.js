import React from 'react'
import todoCss from './TodoItem.module.css';

const TodoItem = ({todo,deleteTaskHandler,increasePriority,decreasePriority}) => {

    function deleteTodoHandler(ev){
        deleteTaskHandler(ev.target.parentElement.previousElementSibling.innerText);
    }

    function upBtnHandler(ev){
        increasePriority(ev.target.parentElement.previousElementSibling.innerText);
    }

  return (
    <div className={todoCss['todoItem']}>
        <span className={todoCss['todoText']}>{todo}</span>
        <span className={todoCss['btnGroup']}>
            <button onClick={upBtnHandler} className={todoCss['button']}>↑</button>
            <button className={todoCss['button']} onClick={(ev)=>decreasePriority(ev.target.parentElement.previousElementSibling.innerText)}>↓</button>
            <button className={todoCss['button']} onClick={deleteTodoHandler}>❌</button>
        </span>
    </div>
  )
}

export default TodoItem