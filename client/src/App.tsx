import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
import ProfileInfo from './components/profile/ProfileInfo/index';
import ProfileUpdate from './components/profile/ProfileUpdate/index';
import OwnPosts from './pages/OwnPosts/OwnPosts';
import FollowedPosts from './pages/FollowedPosts/FollowedPosts';
import PrivateRoute from './Routes/PrivateRoute';
import Notfound from './components/layout/Notfound/index';



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
      <Switch>
        
          <Route exact path="/" component={Intro}/>
            
          <Route path="/posts/:id" component={SinglePost}/>

          <Route exact path="/posts" component={PostList}/>

          <Route path="/login" component={Login}/>
            
          <Route path="/signup" component={SignUp}/>

          <PrivateRoute path="/own-posts" component={OwnPosts}/>
          
          <PrivateRoute path="/followed-posts" component={FollowedPosts}/>
            
          <PrivateRoute path="/newpost" component={BlogForm}/>
            
          <PrivateRoute path="/updatepost/:id" component={BlogUpdate}/>
            
          <PrivateRoute path="/profile"component={ProfileInfo}/>
            
          <PrivateRoute path="/edit-profile" component={ProfileUpdate}/>
          <Route component={Notfound}/>
        
      </Switch>
      </main>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
