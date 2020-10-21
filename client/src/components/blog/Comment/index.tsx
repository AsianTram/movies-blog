import React, { Fragment } from 'react'

import './Comment.scss'
import { CommentObject } from '../../../types'

const Comment: React.FC<{ comments: CommentObject[] }> = ({ comments }) => {
  return (
    <Fragment>
      {comments.length !== 0 ? (
        comments.map(c => (<Fragment>
          <div className="comment">
            <div className="comment__author">
              {c.avatar ? (<img src={c.avatar} alt="user avatar" />) : (<img src="https://via.placeholder.com/60/FF0000/FFFFFF" alt="user avatar" />)}
              <strong>{c.name}</strong>
            </div>
            <p>{c.value}</p>
          </div>
        </Fragment>))

      ) : (
          <div className="comment">
            <p>No one yet commented</p>
          </div>
        )}
    </Fragment>
  )
}

export default Comment
