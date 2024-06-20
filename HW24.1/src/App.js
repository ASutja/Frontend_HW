import React from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
