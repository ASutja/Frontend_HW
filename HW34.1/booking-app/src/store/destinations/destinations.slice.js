import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    const response = await fetch('http://localhost:3001/destinations');
    return response.json();
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDestinations.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectDestinations = (state) => state.destinations;
export default destinationsSlice.reducer;

