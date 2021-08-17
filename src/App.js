import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>React To-Do-List</h1>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
