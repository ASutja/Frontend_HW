import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(1);
  const navigate = useNavigate();

  const handleChildrenChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) {
      value = 0;
    }
    setChildren(value);
  };

  const handleAdultsChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    setAdults(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hotels');
  };

  return (
    <div className="search-page">
      <h1>Search for Hotels</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            value={children}
            onChange={handleChildrenChange}
            min="0"
          />
        </div>
        <div>
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={handleAdultsChange}
            min="1"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchPage;
