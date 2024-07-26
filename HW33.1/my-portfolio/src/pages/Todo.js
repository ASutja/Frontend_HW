import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        TODO List
      </Typography>
      <TextField
        label="New TODO"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addTodo} sx={{ marginTop: 2 }}>
        Add
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todo;
