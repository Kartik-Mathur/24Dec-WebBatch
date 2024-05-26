import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

let initialTodos = ['Cricket', 'Dance', 'Sing', 'Code'];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialTodos);
    
    function deleteTaskHandler(todo){
        const newTodo = todos.filter(t=>t!==todo);
        setTodos(newTodo);
    }

    return (
        <>
            <TodoHeader />
            <TodoList todos={todos} deleteTaskHandler={deleteTaskHandler} />
        </>
    )
}

export default TodoApp