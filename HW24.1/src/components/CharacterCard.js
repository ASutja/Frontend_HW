import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Height: {character.height}</p>
        <p className="card-text">Mass: {character.mass}</p>
        <p className="card-text">Hair Color: {character.hair_color}</p>
        <p className="card-text">Skin Color: {character.skin_color}</p>
        <p className="card-text">Eye Color: {character.eye_color}</p>
        <p className="card-text">Birth Year: {character.birth_year}</p>
        <p className="card-text">Gender: {character.gender}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
