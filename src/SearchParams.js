import React, { useState, useEffect } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';
import UseDropDown from './UseDropdown';
import Results from './Results';

const SearchParams = () => {
  const [location, setlocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = UseDropDown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = UseDropDown('breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreed }) => {
      const breedString = apiBreed.map(({ name }) => name);
      setBreeds(breedString);
      // eslint-disable-next-line no-console
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Loaction
          <input
            id="location"
            type="text"
            value={location}
            placeholder="location"
            onChange={e => setlocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
