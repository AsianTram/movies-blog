import React from 'react';

import './App.css';
import NavBar from './components/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/Footer/index';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
