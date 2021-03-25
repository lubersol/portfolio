import React, { Component } from 'react';
import './App.css';


//Components
import Contacto from './components/Contacto/Contacto';
import Educacion from './components/Educacion/Educacion';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
//import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SobreMi from './components/SobreMi/SobreMi.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SobreMi />
        <Educacion />
        <Portfolio />
        <Contacto />
        <Footer />
      </div>
  );
}
}
export default App;
