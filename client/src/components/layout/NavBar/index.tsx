import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import './NavBar.scss';
import { AppState } from '../../../types';
import { logout } from '../../../redux/actions/users';

const AuthRoute= ()=>{
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <div className="navbar__auth">
      <Link to="/profile"><p>Profile</p></Link>
      <Link to="/own-posts"><p>Own posts</p></Link>
      <Link to="/followed-posts"><p>Followed posts</p></Link>


      <button onClick={()=>logoutHandler()}>Logout</button>
    </div>
  )
}

const UnauthRoute= ()=>{
  return (
    <div className="navbar__unauth">
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Signup</button></Link>
    </div>
  )
}

const NavBar = () => {
  const [isToggle, setToggle]= useState(false) 

  const isAuthenticated= useSelector((state: AppState)=> state.user.isAuthenticated)
  return (
    <nav className="navbar">
      <h3>MovCeb Blog</h3>
      <div className="navbar__right">
      <div className="navbar__links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/posts"><p>Reviews</p></Link>
        {/* <button className="navbar__dropdown">Reviews </button> */}
        <p>Contact</p>
      </div>
      {isAuthenticated ? (<AuthRoute/>): (<UnauthRoute/>)}
      <div className="navbar__hamburger">
        <button className="navbar__hamburger-button" onClick={()=>setToggle(!isToggle)}>
          <i className="fas fa-bars"></i>
        </button>
        {isToggle ? (
          <div className="navbar__hamburger-toggle">
            <Link to="/"><p>Home</p></Link>
            <p>Contact</p>
            <Link to="/posts"><p>Reviews</p></Link>
          </div>
        ): null}
      </div>
      </div>
    </nav>
  )
}

export default NavBar
