import React, { useState } from 'react';

const SearchParams = () => {
  const [location, setlocation] = useState('Seatle, WA');
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
