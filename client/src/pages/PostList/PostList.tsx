import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './PostList.scss';
import QuickButton from '../../components/layout/QuickButton/index';
import { getAllPostsPending } from '../../redux/actions/posts';
import {AppState, PostType} from '../../types'

const PostList = () => {
  const [type, setType]=useState(PostType.all)
  const dispatch = useDispatch()
  const posts = useSelector((state:AppState) => state.post.posts)
  const filteredPosts=posts.filter(p=> type === PostType.all ? p : p.type===type);

  useEffect(()=>{
    console.log(type)
    console.log(posts)
      dispatch(getAllPostsPending())
  },[type, dispatch])
  return (
    <div className="postlist">
      <Filter type={type} setType={setType}/>
      <div className="postlist__content">
        {filteredPosts.map(p=> <BlogBar key={p._id} postInfo={p}/>)}
      </div>
      <QuickButton/>

    </div>
  )
}

export default PostList
