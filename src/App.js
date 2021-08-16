import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Todo from './components/Todo'


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>React To-Do-List {inputText}</h1>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <Todo />
    </div>
  );
}

export default App;
