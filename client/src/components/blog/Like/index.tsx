import React from 'react'

import './Like.scss'

const Like = () => {
  return (
    <div className="like">
      <div className="like__details">
        <p>3 people </p>
        <i className="fa fa-thumbs-up"></i>
      </div>
      <div className="like__btn">
      <i className="far fa-thumbs-up"></i>
      </div>
    </div>
  )
}

export default Like
