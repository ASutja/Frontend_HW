import React from 'react';
import { useSelector } from 'react-redux';
import { selectDestinations } from '../store/destinations/destinations.slice';
import './SearchForm.css';

const SearchForm = () => {
  const destinations = useSelector(selectDestinations);

  console.log("Destinations from Redux store in SearchForm:", destinations); 

  return (
    <form className="search-form">
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <select id="destination" name="destination" className="form-control">
          {destinations.length > 0 ? (
            destinations.map((destination, index) => (
              <option key={index} value={destination}>
                {destination}
              </option>
            ))
          ) : (
            <option>No destinations available</option>
          )}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="checkin">Check in</label>
        <input type="date" id="checkin" name="checkin" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="checkout">Check out</label>
        <input type="date" id="checkout" name="checkout" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="adults">Adults</label>
        <input type="number" id="adults" name="adults" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="children">Children</label>
        <input type="number" id="children" name="children" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SearchForm;

