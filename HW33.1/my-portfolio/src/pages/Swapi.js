import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Swapi = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Star Wars Characters
      </Typography>
      <List>
        {characters.map((character, index) => (
          <ListItem key={index}>
            <ListItemText primary={character.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Swapi;
