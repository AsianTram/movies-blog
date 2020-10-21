import React from 'react';

import './BlogPost.scss'
import { Post } from '../../../types'

const BlogPost: React.FC<{postInfo: Post}> = ({postInfo}) => {
  
  return (
    <div className="blogpost">
      <h3>{postInfo?.name}</h3>
      <div className="blogpost__author">
        {postInfo?.avatar ? (<img src={postInfo.avatar} alt='user avatar'/>) : (        <img src="https://via.placeholder.com/60/FF0000/FFFFFF" alt='user avatar'/>)}
        <strong>{postInfo?.username}</strong>
      </div>
      {
        postInfo?.picture ? (
          <img className="blogpost__photo" src={postInfo.picture} alt='featured pic'/>
        ): null
      }
      <p>
        {postInfo?.content}
      </p>
    </div>
  )
}

export default BlogPost
