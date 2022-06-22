import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>

            <h3
                className='task'
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >
                {todo.text}
            </h3>
            <div
                className="icons">
                <FaCheck
                    className='check-icon'
                />
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon' />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div >
    ));
}

export default Todo;