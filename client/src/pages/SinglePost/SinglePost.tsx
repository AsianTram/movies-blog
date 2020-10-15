import React from 'react'

import BlogPost from '../../components/blog/BlogPost/index'
import Comment from '../../components/blog/Comment/index'
import './SinglePost.scss'
import Like from '../../components/blog/Like'

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
