import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import Navbar from './Navbar';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
        </div>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
