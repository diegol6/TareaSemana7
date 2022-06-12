import React from 'react';
import { Ciudad } from './components/Ciudad';
import { Ciudades } from './components/Ciudades';
import './Styles.css';

function App() {
  return (
    <div className="App">
     <header></header>
      <div className='flexContainerPrincipal'>
        <h1 className='titulo'>Climatología</h1>

        <Ciudades/>
        
        
      </div>
    </div>
  );
}

export default App;
