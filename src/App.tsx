import React from 'react';
import logo from './logo.svg';
import './App.css';
import Explore from './components/organisms/Explore/index';

function App() {
  return (
  <div className="App">
    <Explore isExplore={true}/>
   </div>
  );
}

export default App;
