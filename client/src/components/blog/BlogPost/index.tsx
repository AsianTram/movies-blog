import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import './BlogPost.scss'
import { Post, AppState } from '../../../types'
import { deletePostByIdPending } from '../../../redux/actions/posts';

const BlogPost: React.FC<{ postInfo: Post }> = ({ postInfo }) => {
  const userId = useSelector((state: AppState) => state.user.user?._id)
  const dispatch = useDispatch()
  const deleteAPost=(id:string)=>{
    const res=window.confirm('Are you sure that you want to delete this post? This cannot be undone!')
    if(res){
      dispatch(deletePostByIdPending(id))
    }
  }
  return (
    <div className="blogpost">

      {userId && userId === postInfo.user ? (
        <div className="blogpost__handlers">
          <Link to={`/updatepost/${postInfo._id}`}><i className="fas fa-edit"></i></Link>
          <button onClick={()=> deleteAPost(postInfo._id)}><i className="fas fa-trash"></i></button>
        </div>
      ) : null}

      <h3>{postInfo?.name}</h3>
      <div className="blogpost__author">
        {postInfo?.avatar ? (<img src={postInfo.avatar} alt='user avatar' />) : (<img src="https://via.placeholder.com/60/FF0000/FFFFFF" alt='user avatar' />)}
        <strong>{postInfo?.username}</strong>
      </div>
      {
        postInfo?.picture ? (
          <img className="blogpost__photo" src={postInfo.picture} alt='featured pic' />
        ) : null
      }
      <p>
        {postInfo?.content}
      </p>
    </div>
  )
}

export default BlogPost
