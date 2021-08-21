import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {
  
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    filterHandler();
  },[todos,status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case "Completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <h1>React To-Do-List</h1>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
