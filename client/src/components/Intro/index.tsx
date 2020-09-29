import React from 'react'

import './Intro.scss'

const Intro = () => {
  return (
    <div>
      <div className="intro1">
        <img src="./assets/homecinema.svg" alt ="A man is watching movies"/>
        <div className="intro1__desc">
          <h3>Welcome to MovCeb Blog!</h3>
          <p>We connect with each other through experiences we have towards movies and celebrities</p>
          <p>Don't hesitate! Join Us at:</p>
          <div className="intro1__buttons">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </div>
      <div className="intro2">
        <div className="intro2__desc">
          <h3>Blogs</h3>
          <p>Blogs are contributed by anyone on over the world. You are welcomed to be the part of the family too</p>
          <button>Discover Blogs</button>
        </div>
        <img src="./assets/blogpost.svg" alt ="A girl is posting a blog"/>
      </div>
    </div>
  )
}

export default Intro
