import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
}
export default App;
