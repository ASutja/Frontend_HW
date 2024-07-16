import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditSubmit = (id) => {
    dispatch(editTodo(id, editText));
    setEditId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input 
                type="text" 
                value={editText} 
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleEditSubmit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-button">Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
