import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './NavBar.scss';
import { AppState, User } from '../../../types';
import { logout } from '../../../redux/actions/users';

const AuthRoute: React.FC<{ user: User | null }> = ({ user }) => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  const [isUserToggle, setUserToggle] = useState(false)
  return (
    <div className="navbar__auth">
      <button className="navbar__auth__btn" onClick={() => setUserToggle(!isUserToggle)}><i className="fas fa-user-circle"></i>{user?.name}<i className="fas fa-angle-down"></i></button>
      {isUserToggle ? (
        <div className="navbar__auth-toggle">
          <Link to="/profile"><p>Profile</p></Link>
          <Link to="/own-posts"><p>Own posts</p></Link>
          <Link to="/followed-posts"><p>Followed posts</p></Link>
          <button className="navbar__auth__logout" onClick={() => logoutHandler()}>Logout</button>
        </div>
      ) : null}
    </div>
  )
}

const UnauthRoute = () => {
  return (
    <div className="navbar__unauth">
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Signup</button></Link>
    </div>
  )
}

const NavBar = () => {
  const [isToggle, setToggle] = useState(false)

  const isAuthenticated = useSelector((state: AppState) => state.user.isAuthenticated)
  const user = useSelector((state: AppState) => state.user.user)
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
        {isAuthenticated ? (<AuthRoute user={user} />) : (<UnauthRoute />)}
        <div className="navbar__hamburger">
          <button className="navbar__hamburger-button" onClick={() => setToggle(!isToggle)}>
            <i className="fas fa-bars"></i>
          </button>
          {isToggle ? (
            <div className="navbar__hamburger-toggle">
              <Link to="/"><p>Home</p></Link>
              <p>Contact</p>
              <Link to="/posts"><p>Reviews</p></Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
