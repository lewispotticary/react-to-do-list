import React from 'react';

function Form ({setInputText, inputText, todos, setTodos}){

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        setTodos([
            ...todos, {text: inputText, id: Math.random() * 1000}
        ])
        setInputText("");
    }

    return(
        <div className="formDiv">
             <input onChange={inputTextHandler} value={inputText} type="text" name="" id="" />
             <button onClick={submitTodoHandler}><i className="fa fa-plus fa-lg" aria-hidden="true"></i></button>
        </div>
    );
}

export default Form;