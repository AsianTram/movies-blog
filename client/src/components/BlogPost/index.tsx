import React from 'react'

import './BlogPost.scss'

const BlogPost = () => {
  return (
    <div className="blogpost">
      <h3>My first movie review</h3>
      <div className="blogpost__author">
        <img src="https://via.placeholder.com/60/FF0000/FFFFFF"/>
        <strong>Tram Nguyen</strong>
      </div>
      <img className="blogpost__photo" src="https://via.placeholder.com/300/000000"/>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tristique purus, sit amet porta metus. Sed ultricies nisi ipsum. Sed hendrerit nunc quis dui fringilla, vitae viverra mi tristique.
      </p>
    </div>
  )
}

export default BlogPost
