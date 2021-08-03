import React from 'react';
//Import Components
import Todo from './Todo';

/*Passing in array of todos, we will iterate through the array and render each todo item
The {todos.map...} portion is where I can pass in javascript, basically whenever {} are used
It renders a Todo element each time, and sets the todo text to the todo text being passed in (which is defined as our input text in Form.js)
We also pass in a key so that each todo has a unique key, which will be our id in this case
*/
const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="container_todo">
            <ul className="list_todo">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        todo={todo}
                        text={todo.text} 
                        key={todo.id} />
                ))}
            </ul>
            <br></br>
        </div>
    )
}

export default ToDoList;