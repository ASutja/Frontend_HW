import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodos } from '../redux/actions/todoActions';

const Footer = () => {
  const dispatch = useDispatch();

  const handleClearTodos = () => {
    console.log('Clearing TODOs');
    dispatch(clearTodos());
  };

  return (
    <footer>
      <button onClick={handleClearTodos}>Clear TODO Data</button>
    </footer>
  );
};

export default Footer;
