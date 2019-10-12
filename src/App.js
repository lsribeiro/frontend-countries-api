import React from 'react';
import './App.scss';

import Header from './Header';
import Toolbar from './Toolbar';
import CountryList from './CountryList';

function App() {
  return (
  	  <div>
  	  	  <Header />
  	  	  <Toolbar />
  	  	  <CountryList />
  	  </div>
  );
}

export default App;
