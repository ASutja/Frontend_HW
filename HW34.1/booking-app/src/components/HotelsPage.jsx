import React from 'react';
import { useSelector } from 'react-redux';
import HotelCard from './HotelCard';
import { selectHotels } from '../store/hotels/hotels.slice';
import './HotelsPage.css';

const HotelsPage = () => {
  const hotels = useSelector(selectHotels);

  return (
    <div className="hotels-page">
      <h1>Hotels</h1>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
