import React from 'react';
import { useSelector } from 'react-redux';

const TodoFooter = () => {
  const totalTodos = useSelector((state) => state.todos.items.length);

  return (
    <footer>
      <p>Total tasks: {totalTodos}</p>
    </footer>
  );
};

export default TodoFooter;
