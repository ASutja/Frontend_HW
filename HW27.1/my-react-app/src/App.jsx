import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
