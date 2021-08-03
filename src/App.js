import React, { useState, useEffect } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import ToDoList from "./components/TodoList";

function App() {

  //Consider adding React Developer Tools on Browser to see components

  //This sets the state so that I can use it anywhere in my application, "" is because it is a string
  const[inputText, setInputText] = useState("");

  //Same thing here, but for Todos
  const [todos, setTodos] = useState([]);

  //We need a state for what todos list we're looking at, all is default
  const [status, setStatus] = useState("all");

  //Keeps track of our filtered lists of todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  //UseEffect!

  //Run ONCE When the app starts
  useEffect(() => {
      getLocalTodos();
  }, []);

  //First argument is the filterHandler, second argument is an array
  //This means that it will only run once when array state changes or when todos state changes
  //It will also run whenever the status is changed
  useEffect(() => {
    //console.log('hello');
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 

  //Functions

  //Here we are filtering our todos by their completed state
  //Simply, if the todo is done (determined by select values), it goes in the completed state, etc. Default just shows all todos
  const filterHandler = () => {
      switch(status) {
          case 'done':
              setFilteredTodos(todos.filter(todo => todo.completed === true));
              break;
          case 'todo':
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break;
          default:
              setFilteredTodos(todos);
              break;
      }
  };
  
  //Save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  //This gets our local storage by either setting todos to null if no storage
  //or setting todos to whatever we have in our local storage
  const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null) {
          localStorage.setItem('todos', JSON.stringify([]));
      }
      else {//We have something in local storage
          let localTodo = JSON.parse(localStorage.getItem('todos'));
          setTodos(localTodo);
      }
  }

  //Adding states up here allows for it to be used in all components, easier this way

  //In the Form tag below, the state variables are passed in so that we can use them
  //in the form component

  return (
    <div className="App">
      <h1 className="headerTodo">Danny's Todo List</h1>
      <Form 
          inputText={inputText} 
          todos={todos} 
          setInputText={setInputText} 
          setTodos={setTodos}
          setStatus={setStatus}
      />
      <ToDoList 
          filteredTodos={filteredTodos}
          setTodos={setTodos} 
          todos={todos} />
    </div>
  );
}

export default App;
