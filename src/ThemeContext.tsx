import { createContext } from 'react';

const ThemeContext = createContext<[string, (theme: string) => void]>([
  'green',
  // tslint:disable-next-line: no-empty
  () => {}
]);

export default ThemeContext;
