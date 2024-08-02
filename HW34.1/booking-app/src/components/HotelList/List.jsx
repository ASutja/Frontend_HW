import React from 'react';
import { useSelector } from 'react-redux';
import { selectHotels } from '../../store/hotels/hotels.slice';
import './HotelList.css';

const HotelList = () => {
  const hotels = useSelector(selectHotels);

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <p>{hotel.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
