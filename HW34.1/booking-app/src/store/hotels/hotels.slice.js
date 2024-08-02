import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Woogo Central Park - Tempo Apartments',
    address: '240 West 73rd Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 2,
    name: 'Amolite Hotel',
    address: 'Avenida Curitiba, 811',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 3,
    name: 'Redford Hotel',
    address: '136 Ludlow Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 4,
    name: 'Hotel Richland New York',
    address: '5 Allen Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 5,
    name: 'Studio Lux Times Square',
    address: 'between 9 Avenue and 8 Avenue',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 6,
    name: 'The Bowery Hotel',
    address: '335 Bowery',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 7,
    name: 'The Plaza Hotel',
    address: '768 5th Avenue',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 8,
    name: 'The Langham, New York',
    address: '400 5th Avenue',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
  {
    id: 9,
    name: 'The Ritz-Carlton New York',
    address: '50 Central Park S',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    imageUrl: 'https://via.placeholder.com/140',
  },
];

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action) => action.payload,
  },
});

export const { setHotels } = hotelsSlice.actions;
export const selectHotels = (state) => state.hotels;
export default hotelsSlice.reducer;
