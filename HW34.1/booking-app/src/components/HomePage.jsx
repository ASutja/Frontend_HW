import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/hotels');
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Destination" />
          <input type="date" placeholder="Check in" />
          <input type="date" placeholder="Check out" />
          <input type="number" placeholder="Adults" min="0"/>
          <input type="number" placeholder="Children" min="0" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <h1>Travel With Booking</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default HomePage;
