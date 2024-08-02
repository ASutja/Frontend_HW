import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';
import { setDestinations } from './store/destinations/destinations.slice';
import db from './data/db.json'; 

console.log("Destinations from db.json:", db.destinations); 

store.dispatch(setDestinations(db.destinations));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
