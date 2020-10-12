import React from 'react'

import BlogPost from '../../components/BlogPost/index'
import Comment from '../../components/Comment/index'
import './SinglePost.scss'
import Like from '../../components/Like'

const SinglePost = () => {
  return (
    <div className="singlepost">
      <BlogPost/>
      <Like/>
      <Comment/>
    </div>
  )
}

export default SinglePost
