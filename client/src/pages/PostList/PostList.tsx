import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './PostList.scss';
import QuickButton from '../../components/layout/QuickButton/index';
import { getAllPostsPending } from '../../redux/actions/posts';
import {AppState} from '../../types'

const PostList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state:AppState) => state.post.posts)

  useEffect(()=>{
    dispatch(getAllPostsPending())
  },[dispatch])
  return (
    <div className="postlist">
      <Filter/>
      <div className="postlist__content">
        {posts.map(p=> <BlogBar key={p._id} postInfo={p}/>)}
      </div>
      <QuickButton/>

    </div>
  )
}

export default PostList
