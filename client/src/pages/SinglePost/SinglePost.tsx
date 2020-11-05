import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BlogPost from '../../components/blog/BlogPost/index'
import Comment from '../../components/blog/Comment/index'
import './SinglePost.scss'
import Like from '../../components/blog/Like'
import { getPostByIdPending } from '../../redux/actions'
import { AppState } from '../../types'

const SinglePost = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{id:string}>()
  const postInfo = useSelector((state: AppState) => state.post.currentPost)
  const user = useSelector((state: AppState) => state.user.user)

  useEffect(() => {
    dispatch(getPostByIdPending(id))
  }, [dispatch, id])
  return (
    <div className="singlepost">
      {postInfo ? (
        <Fragment>
          <BlogPost postInfo={postInfo}/>
          <Like likes={postInfo.likes} userId={user?._id} postId={postInfo._id}/>
          <Comment comments={postInfo.comments} user={user}/>
        </Fragment>
      ) : (
          <p>No post found</p>
        )}

    </div>
  )
}

export default SinglePost
