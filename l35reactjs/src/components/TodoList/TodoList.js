import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todos,deleteTaskHandler}) => {
  return (
    todos.map(todo=><TodoItem deleteTaskHandler={deleteTaskHandler} todo={todo} />)
  )
}

export default TodoList