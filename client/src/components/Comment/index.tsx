import React from 'react'

import './Comment.scss'

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__author">
        <img src="https://via.placeholder.com/60/FF0000/FFFFFF"/>
        <strong>Tram Nguyen</strong>
      </div>
      <p>This is really cool</p>
    </div>
  )
}

export default Comment
