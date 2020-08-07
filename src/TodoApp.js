import React from 'react'
import TodoItem from './Components/TodoItem'
import TodosData from './Components/TodosData'
import './App.css'

function TodoApp() {
const TodoComponents = TodosData.map((item) => {
    return( <TodoItem todo={item} key={item.id} />)
})

return (
    <div className="todo-list">
        {TodoComponents}
    </div>
)

}

export default TodoApp;


