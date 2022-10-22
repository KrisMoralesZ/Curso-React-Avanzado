import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { GlobalStyle } from './GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index.jsx';

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
