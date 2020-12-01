import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/blog/Filter/index'
import BlogBar from '../../components/blog/BlogBar'
import './OwnPosts.scss';
import QuickButton from '../../components/layout/QuickButton/index';
import { AppState, PostType, Post } from '../../types'
import { loadProfilePending } from '../../redux/actions/profile';
import { getAllPostsPending } from '../../redux/actions';

const OwnPosts = () => {
  const [type, setType] = useState<PostType>(PostType.all)
  const dispatch = useDispatch()
  const ownposts = useSelector((state: AppState) => state.profile.profile?.posts)
  const allPosts = useSelector((state: AppState) => state.post.posts)
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    if (ownposts!==undefined && allPosts.length!==0) {
      let postIds = ownposts?.map(p => p.postid)
      switch (type) {
        case PostType.all:
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
          break;
        case PostType.movie:
          postIds = ownposts?.filter(p => p.type === PostType.movie).map(p => p.postid)
          setPosts(allPosts.filter(p => postIds?.includes(p._id)))
          break;
        case PostType.celebrity:
          postIds = ownposts?.filter(p => p.type === PostType.celebrity).map(p => p.postid)
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

  }, [type, ownposts, allPosts])
  return (
    <div className="ownposts">
      <Filter type={type} setType={setType}/>
      <div className="ownposts__content">
        {posts ? posts.map(p => <BlogBar key={p._id} postInfo={p} />) : <p>You need to login to see your posts</p>}
      </div>
      <QuickButton />

    </div>
  )
}

export default OwnPosts
