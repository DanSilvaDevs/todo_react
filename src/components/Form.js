import React from "react";

//Props in the parenthesis/brackets below gives access to all our props
//But also preferred method is just passing them in by themselves
//So here we pass the inputText and todos
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    //Here I can write javascript code of whatever type I want

    const inputTextHandler = (e) => {
        setInputText(e.target.value);//Sets the value of our InputText variable
        //So with this, we can use that inputText variable anywhere!
    };

    const submitToDoHandler = (e) => {
        //This prevents form from resubmitting each time we click the button
        //Notice we add it as an onClick event for the button 
        e.preventDefault();

        /*Here is essentially our array filled with todos
        We have the text value of the todo, default completed value of no and
        an id number that is totally random for now
        The ...todos basically says pass on any previous todos
        */
        setTodos([
            ...todos, { text: inputText, completed: false, id:Math.random() * 1000 }
        ]);

        /*This resets our input text to be nothing after we click the button to add the input text, but it doesn't update the UI
        just the value of the state

        This is where the "value={inputText}" in our input tag below comes into play, that updates the input value as well to be equal
        to whatever the inputText state is*/
        setInputText("");
    };

    //This sets our status of what list we're looking at. So each time the select is changed to a list, the status will be that list
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form className="form_todo">
            <input value={inputText} onChange={inputTextHandler} type="text" className="input_todo" placeholder="Task"/>
                <button onClick={submitToDoHandler} className="button_todo" type="submit">
                    <i className="button_todo_text"></i>
                </button>
            <div className="todo_options">
                <select onChange={statusHandler} className="select_todo">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="todo">ToDo</option>
                </select>
            </div>
        </form>
    );
}

export default Form;