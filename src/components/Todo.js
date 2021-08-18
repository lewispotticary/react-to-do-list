import React from 'react';

function Todo ({text, todo, setTodos, todos}){

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fa fa-check fa-lg"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fa fa-trash fa-lg"></i></button>
        </div>
    );
}

export default Todo;