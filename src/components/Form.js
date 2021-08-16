import React from 'react';

function Form ({setInputText, inputText, todos, setTodos}){

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        console.log("hello");
    }

    return(
        <div className="formDiv">
             <input onChange={inputTextHandler} value={inputText} type="text" name="" id="" />
             <button onClick={submitTodoHandler}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    );
}

export default Form;