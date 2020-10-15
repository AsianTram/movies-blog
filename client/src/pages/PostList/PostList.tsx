import React from 'react'

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './PostList.scss';
import QuickButton from '../../components/layout/QuickButton/index';

const PostList = () => {
  return (
    <div className="postlist">
      <Filter/>
      <div className="postlist__content">
        <BlogBar/>
        <BlogBar/>
        <BlogBar/>
      </div>
      <QuickButton/>

    </div>
  )
}

export default PostList
