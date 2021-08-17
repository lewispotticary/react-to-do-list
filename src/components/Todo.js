import React from 'react';

function Todo ({text}){
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="trash-btn"><i className="fa fa-trash fa-lg"></i></button>
        </div>
    );
}

export default Todo;