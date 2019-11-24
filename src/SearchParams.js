import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import UseDropDown from './UseDropdown';

const SearchParams = () => {
  const [location, setlocation] = useState('Seatle, WA');
  // const [animal, setAnimal] = useState('dog');
  // const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = UseDropDown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = UseDropDown('breed', '', breeds);

  return (
    <div className="search-params">
      <form>
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

        {/* <label htmlFor="animal">
          animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onBlur={e => setAnimal(e.target.value)}
            onChange={e => setAnimal(e.target.value)}
          >
            <option value="">All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label> */}

        {/* <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label> */}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
