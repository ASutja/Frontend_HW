import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div className="form-group">
          <label>New Todo</label>
          <input 
            type="text" 
            className="form-control" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
