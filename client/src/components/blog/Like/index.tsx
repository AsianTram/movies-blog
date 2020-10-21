import React from 'react'

import './Like.scss'
import { LikeObject } from '../../../types'

const Like: React.FC<{likes:LikeObject[]}> = ({likes}) => {
  return (
    <div className="like">
      <div className="like__details">
        <p>{likes.length} people </p>
        <i className="fa fa-thumbs-up"></i>
      </div>
      <div className="like__btn">
      <i className="far fa-thumbs-up"></i>
      </div>
    </div>
  )
}

export default Like
