import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { GlobalStyle } from './GlobalStyles.sc.jsx';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}
export default App;
