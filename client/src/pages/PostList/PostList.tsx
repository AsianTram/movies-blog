import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './PostList.scss';
import QuickButton from '../../components/layout/QuickButton/index';
import { getAllPostsPending } from '../../redux/actions/posts';

const PostList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllPostsPending())
  },[dispatch])
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
