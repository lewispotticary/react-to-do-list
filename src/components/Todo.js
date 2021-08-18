import React from 'react';

function Todo ({text, todo, setTodos, todos}){

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn"><i className="fa fa-trash fa-lg"></i></button>
        </div>
    );
}

export default Todo;