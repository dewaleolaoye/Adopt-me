import React from 'react';

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = 'https://placecorgi.com/300/300';
  if (media.length > 0) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-contatiner">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
