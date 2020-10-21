import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'

import './App.css';
import NavBar from './components/layout/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/layout/Footer/index';
import SinglePost from './pages/SinglePost/SinglePost';
import PostList from './pages/PostList/PostList';
import BlogForm from './components/blog/BlogForm/index';
import SignUp from './components/user/SignUp/index';
import Login from './components/user/Login/index';



function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/posts/:id">
            <SinglePost />
          </Route>
          <Route exact path="/posts">
            <PostList/>
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/newpost">
            <BlogForm />
          </Route>
        </main>
        <Footer />
      </Router>

    </div>
</Provider>
  );
}

export default App;
