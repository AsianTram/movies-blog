import React from 'react'

import './NavBar.scss';

const AuthRoute= ()=>{
  return (
    <div className="navbar__auth">
      <button>Firstname Lastname</button>
    </div>
  )
}

const UnauthRoute= ()=>{
  return (
    <div className="navbar__unauth">
      <button>Login</button>
      <button>Signup</button>
    </div>
  )
}
const index = () => {
  return (
    <nav className="navbar">
      <h3>MovCeb Blog</h3>
      <div className="navbar__links">
        <p>Home</p>
        <button className="navbar__dropdown">Reviews </button>
        <p>Contact</p>
        <UnauthRoute/>
      </div>
      <div className="navbar__hamburger">
        <button className="navbar__hamburger-button">
          <i className="fas fa-bars"></i>
        </button>
        {/* <p>Home</p>
        <p>Contact</p>
        <UnauthRoute/> */}
      </div>
    </nav>
  )
}

export default index
