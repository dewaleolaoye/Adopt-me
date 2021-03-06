import React, { useState, useEffect, useContext } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';
import UseDropDown from './UseDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [location, setlocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = UseDropDown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = UseDropDown('breed', '', breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
