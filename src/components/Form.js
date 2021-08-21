import React from 'react';

function Form ({setInputText, inputText, todos, setTodos, setStatus}){

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <div className="formDiv">
             <input onChange={inputTextHandler} value={inputText} type="text" name="" id="" />
             <button onClick={submitTodoHandler}><i className="fa fa-plus fa-lg" aria-hidden="true"></i></button>
             <select onChange={statusHandler}className="optionList" name="options" id="options">
                 <option value="All">All</option>
                 <option value="Completed">Completed</option>
                 <option value="Uncompleted">Uncompleted</option>
             </select>
        </div>
    );
}

export default Form;