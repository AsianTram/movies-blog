import React, {useState} from 'react'

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

const NavBar = () => {
  const [isToggle, setToggle]= useState(false) 

  return (
    <nav className="navbar">
      <h3>MovCeb Blog</h3>
      <div className="navbar__right">
      <div className="navbar__links">
        <p>Home</p>
        <button className="navbar__dropdown">Reviews </button>
        <p>Contact</p>
      </div>
      <UnauthRoute/>
      <div className="navbar__hamburger">
        <button className="navbar__hamburger-button" onClick={()=>setToggle(!isToggle)}>
          <i className="fas fa-bars"></i>
        </button>
        {isToggle ? (
          <div className="navbar__hamburger-toggle">
            <p>Home</p>
            <p>Contact</p>
            <p>Reviews</p>
          </div>
        ): null}
      </div>
      </div>
    </nav>
  )
}

export default NavBar
