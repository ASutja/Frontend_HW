import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male' },
  { name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', eye_color: 'yellow', birth_year: '41.9BBY', gender: 'male' },

];

function CharacterList() {
  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col-md-4 mb-4">
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
