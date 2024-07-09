import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapiData } from '../redux/actions/swapiActions';

const SwapiData = () => {
  const dispatch = useDispatch();
  const swapiData = useSelector((state) => state.swapi.swapiData);

  useEffect(() => {
    dispatch(fetchSwapiData());
  }, [dispatch]);

  return (
    <div>
      <h2>Swapi Data</h2>
      <ul>
        {swapiData.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SwapiData;
