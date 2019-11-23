import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Avanese" />
      <Pet name="Popper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
