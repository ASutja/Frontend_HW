import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, selectDestinations } from '../../store/destinations/destinations.slice';
import './SearchForm.css';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const destinations = useSelector(selectDestinations);
  const [formData, setFormData] = useState({ destination: '', children: 0, adults: 1 });

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hotels');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <TextField
        select
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        fullWidth
      >
        {destinations.map((destination) => (
          <MenuItem key={destination.id} value={destination.name}>
            {destination.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        type="number"
        label="Children"
        name="children"
        value={formData.children}
        onChange={handleChange}
        inputProps={{ min: 0 }}
        fullWidth
      />
      <TextField
        type="number"
        label="Adults"
        name="adults"
        value={formData.adults}
        onChange={handleChange}
        inputProps={{ min: 1 }}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SearchForm;
