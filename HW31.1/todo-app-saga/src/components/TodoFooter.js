import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearTodos, loadTodos } from '../redux/actions';

const TodoFooter = () => {
  const totalTodos = useSelector((state) => state.todos.items.length);
  const dispatch = useDispatch();

  return (
    <footer>
      <p>Total tasks: {totalTodos}</p>
      <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      <button onClick={() => dispatch(loadTodos())}>Load Todos</button>
    </footer>
  );
};

export default TodoFooter;
