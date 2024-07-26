import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Страница имеет заголовок TODO', () => {
  render(<App />);
  const headerElement = screen.getByText(/TODO/i);
  expect(headerElement).toBeInTheDocument();
});

test('В поле для текста можно ввести как цифры, так и буквы', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Добавить задачу/i);
  fireEvent.change(inputElement, { target: { value: '123abc' } });
  expect(inputElement.value).toBe('123abc');
});

test('Нажатие на кнопку “Добавить” без текста вызывает ошибку', () => {
  render(<App />);
  const addButton = screen.getByText(/Добавить/i);
  fireEvent.click(addButton);
  const errorElement = screen.getByText(/Поле не должно быть пустым/i); 
  expect(errorElement).toBeInTheDocument();
});

test('После ввода текста и нажатия на “Добавить” появляется новый элемент в списке', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Добавить задачу/i);
  const addButton = screen.getByText(/Добавить/i);
  
  fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
  fireEvent.click(addButton);
  
  const newItem = screen.getByText(/Новая задача/i);
  expect(newItem).toBeInTheDocument();
});

test('Проверка, что можно удалить элемент из списка', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Добавить задачу/i);
  const addButton = screen.getByText(/Добавить/i);
  
  fireEvent.change(inputElement, { target: { value: 'Удаляемая задача' } });
  fireEvent.click(addButton);
  
  const newItem = screen.getByText(/Удаляемая задача/i);
  expect(newItem).toBeInTheDocument();
  
  const deleteButton = screen.getByText(/Удалить/i);
  fireEvent.click(deleteButton);
  
  expect(newItem).not.toBeInTheDocument();
});
