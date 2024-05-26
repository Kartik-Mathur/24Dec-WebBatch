import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

let initialTodos = ['Cricket', 'Dance', 'Sing', 'Code'];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialTodos);

    function deleteTaskHandler(todo) {
        const newTodo = todos.filter(t => t !== todo);
        setTodos(newTodo);
    }

    function addTask(newTask) {
        setTodos([newTask, ...todos]);
    }

    let increasePriority = (task) => {
        let newTodos = [...todos];
        let index = newTodos.indexOf(task);
        if (index <= 0) return;
        let temp = newTodos[index];
        newTodos[index] = newTodos[index - 1];
        newTodos[index - 1] = temp;
        setTodos(newTodos);
    }

    let decreasePriority = (task) => {
        let newTodos = [...todos];
        let index = newTodos.indexOf(task);
        if (index >= newTodos.length - 1) return;
        let temp = newTodos[index];
        newTodos[index] = newTodos[index + 1];
        newTodos[index + 1] = temp;
        setTodos(newTodos);
    }

    return (
        <>
            <TodoHeader addTask={addTask} />
            <TodoList todos={todos} decreasePriority={decreasePriority} increasePriority={increasePriority} deleteTaskHandler={deleteTaskHandler} />
        </>
    )
}

export default TodoApp