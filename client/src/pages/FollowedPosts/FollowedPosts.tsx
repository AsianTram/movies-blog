import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './FollowedPosts.scss';
import QuickButton from '../../components/layout/QuickButton/index';
import {AppState, PostType, Post} from '../../types'
import { loadProfilePending } from '../../redux/actions/profile';
import { getAllPostsPending } from '../../redux/actions';
import { all } from 'redux-saga/effects';

const FollowedPosts = () => {
  const [type, setType] = useState<PostType>(PostType.all)
  const dispatch = useDispatch()
  const followedPosts = useSelector((state: AppState) => state.profile.profile?.followedposts)
  const allPosts = useSelector((state: AppState) => state.post.posts)
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    if (followedPosts!==undefined && allPosts) {
      let postIds = followedPosts?.map(p => p.postid)

      switch (type) {
        case PostType.all:
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
          break;
        case PostType.movie:
          postIds = followedPosts?.filter(p => p.type === PostType.movie).map(p => p.postid)
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
          break;
        case PostType.celebrity:
          postIds = followedPosts?.filter(p => p.type === PostType.celebrity).map(p => p.postid)
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
          break;
        default:
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
      }
    }
    else {
      dispatch(loadProfilePending())
      dispatch(getAllPostsPending())
    }

  }, [type, followedPosts, allPosts])
  return (
    <div className="followedposts">
      <Filter type={type} setType={setType}/>
      <div className="followedposts__content">
        {posts ? (posts.map(p=> <BlogBar key={p._id} postInfo={p}/>)): (<p>You need to login to view followed posts</p>)}
      </div>
      <QuickButton/>

    </div>
  )
}

export default FollowedPosts
