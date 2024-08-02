import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './hotels/hotels.slice';
import destinationsReducer from './destinations/destinations.slice';

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    destinations: destinationsReducer,
  },
});

export default store;
