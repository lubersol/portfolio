import React from 'react';
import './App.css';


//Components
import Contacto from './components/Contacto/Contacto';
import Educacion from './components/Educacion/Educacion';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SobreMi from './components/SobreMi/SobreMi.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SobreMi />
      <Portfolio />
      <Educacion />
      <Contacto />
    </div>
  );
}

export default App;
