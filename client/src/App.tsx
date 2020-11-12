import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useDispatch} from 'react-redux'

import './App.css';
import NavBar from './components/layout/NavBar/index'
import Intro from './components/Intro/index'
import Footer from './components/layout/Footer/index';
import SinglePost from './pages/SinglePost/SinglePost';
import PostList from './pages/PostList/PostList';
import BlogForm from './components/blog/BlogForm/index';
import SignUp from './components/user/SignUp/index';
import Login from './components/user/Login/index';
import Alert from './components/layout/Alert';
import setTokenToHeader from './utils/setTokenToHeader';
import { loadUser } from './redux/actions/users';
import BlogUpdate from './components/blog/BlogUpdate';
import { loadProfilePending } from './redux/actions/profile';



function App() {
  const dispatch = useDispatch()

  if (localStorage.token) {
    setTokenToHeader(localStorage.token)
    dispatch(loadUser())
    dispatch(loadProfilePending())
  }

  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadProfilePending())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Alert/>
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
          <Route path="/updatepost/:id">
            <BlogUpdate />
          </Route>
        </main>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
