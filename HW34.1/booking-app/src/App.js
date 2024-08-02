import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HotelsPage from './components/HotelsPage';
import AboutPage from './components/AboutPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;