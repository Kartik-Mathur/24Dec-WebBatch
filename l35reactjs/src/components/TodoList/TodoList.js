import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todos,deleteTaskHandler,increasePriority,decreasePriority}) => {
  return (
    todos.map(todo=><TodoItem decreasePriority={decreasePriority} increasePriority={increasePriority} deleteTaskHandler={deleteTaskHandler} todo={todo} />)
  )
}

export default TodoList