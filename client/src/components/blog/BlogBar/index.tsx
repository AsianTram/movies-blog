import React from 'react'

import './BlogBar.scss'

const BlogBar = () => {
  return (
    <div className="blogbar">
      <h3>Some interesting title</h3>
      <div className="blogbar__author">
        <img src="https://via.placeholder.com/60/FF0000/FFFFFF"/>
        <strong>Tram Nguyen</strong>
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tristique purus, sit amet porta metus. Sed ultricies nisi ipsum. Sed hendrerit nunc quis dui fringilla, vitae viverra mi tristique.
      </p>
      <button>Read more</button>
    </div>
  )
}

export default BlogBar
