import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.imageUrl} alt={hotel.name} />
      <h2>{hotel.name}</h2>
      <p>address: {hotel.address}</p>
      <p>city: {hotel.city}, state: {hotel.state}, country code: {hotel.countryCode}</p>
    </div>
  );
};

export default HotelCard;
