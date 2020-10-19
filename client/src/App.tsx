import React from 'react';

import './App.css';
import NavBar from './components/layout/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/layout/Footer/index';
import SinglePost from './pages/SinglePost/SinglePost';
import PostList from './pages/PostList/PostList';
import BlogForm from './components/blog/BlogForm/index';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <PostList/>
        <BlogForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
