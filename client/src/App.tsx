import React from 'react';

import './App.css';
import NavBar from './components/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/Footer/index';
import SinglePost from './pages/SinglePost/SinglePost';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <SinglePost/>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
