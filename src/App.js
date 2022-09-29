import React from 'react';
import './App.css';
import FactListControl from './FactListControl';
import FactList from './FactList';

function App() {
  return (
    <div className="container">
      <p>Сколько фактов нужно отобразить: </p>
      <FactListControl/>
      <FactList/>
    </div>
  );
}

export default App;
