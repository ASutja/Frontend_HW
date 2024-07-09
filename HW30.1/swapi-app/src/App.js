import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';
import SwapiData from './components/SwapiData';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SwapiData />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
