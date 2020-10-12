import React from 'react';

import './App.css';
import NavBar from './components/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/Footer/index';
import BlogBar from './components/BlogBar/index';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Intro/> */}
      <BlogBar/>
      <Footer/>
    </div>
  );
}

export default App;
