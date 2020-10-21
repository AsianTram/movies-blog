import React from 'react'
import {Link} from 'react-router-dom'

import './BlogBar.scss'
import { Post } from '../../../types'

const BlogBar: React.FC<{postInfo:Post}>= ({postInfo}) => {
  return (
    <div className="blogbar">
      <h3>{postInfo.name}</h3>
      <div className="blogbar__author">
        {postInfo.avatar ? (<img src={postInfo.avatar} alt="user avatar"/>): (<img src="https://via.placeholder.com/60/FF0000/FFFFFF" alt="user avatar"/>)}
        <strong>{postInfo.username}</strong>
      </div>
      <p>
        {postInfo.content}
      </p>
      <Link to={`/posts/${postInfo._id}`}><button>Read more</button></Link>
    </div>
  )
}

export default BlogBar
