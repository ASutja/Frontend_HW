import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setDestinations: (state, action) => {
      console.log("Setting destinations:", action.payload); 
      return action.payload;
    },
  },
});

export const { setDestinations } = destinationsSlice.actions;
export const selectDestinations = (state) => state.destinations;
export default destinationsSlice.reducer;
