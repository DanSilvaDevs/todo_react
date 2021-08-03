import React from 'react';

//Passing in the text from the ToDoList.js file, which we set as the todo.text
const Todo = ({text, todo, todos, setTodos}) => {

    //Events
    const deleteHandler = () => {
        //Get all our todos, filter them out by checking element (el).
        //If the element id is equal to our todo id, hence we found our deleted todo, we remove it from our todo array
        setTodos(todos.filter(el => el.id !== todo.id));
        //console.log values in case something seems off
    };

    //Switching completed from false to true
    //So essentially, we map our todo item to its id, then return all proporties of that todo, only changing the completed variable
    //Return the item itself if something is off
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
            })
        );
    };

    /*
    Major Pieces Below:
    The li item with className is essentially showing our text, but it is also doing a conditional check for class
    Basically, if the todo selected is completed, it will use the completed_todo class, otherwise it'll use todo_item class
    */

    return (
        <div className="todo_div">
            <li className={`todo_item ${todo.completed ? "completed_todo" : "normal_todo"}`}>{text}</li>
            <button onClick={completeHandler} className="todo_button_complete">
                <i className="todo_list_item_check"></i>
            </button>
            <button onClick={deleteHandler} className="todo_button_trash">
                <i className="todo_list_item_trash"></i>
            </button>
        </div>
    );
};  

export default Todo;