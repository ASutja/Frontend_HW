import React from 'react';
import { useSelector } from 'react-redux';
import HotelCard from '../components/HotelCard/HotelCard';
import { selectHotels } from '../store/hotels/hotels.slice';
import './HotelsPage.css';

const HotelsPage = () => {
  const hotels = useSelector(selectHotels);

  return (
    <div className="hotels-page">
      <br />
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
