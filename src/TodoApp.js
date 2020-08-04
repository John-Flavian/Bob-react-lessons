import React from 'react'
import TodoItem from './Components/TodoItem'
import './App.css'

function TodoApp() {
return (
    <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
)

}

export default TodoApp;