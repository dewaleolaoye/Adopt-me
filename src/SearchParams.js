import React, { useState } from 'react';

import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setlocation] = useState('Seatle, WA');
  const [animal, setAnimal] = useState('dog');
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

        <label htmlFor="animal">
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
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
