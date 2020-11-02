import React from 'react'
import {useDispatch} from 'react-redux'

import './Like.scss'
import { LikeObject, User } from '../../../types'
import { likePostByIdPending, unlikePostByIdPending } from '../../../redux/actions/posts'

const Like: React.FC<{likes:LikeObject[], userId: string | undefined, postId:string}> = ({likes, userId, postId}) => {
  let hasLiked= false
  likes.map(like=> {
    if(userId && like.user===userId){
      hasLiked=true
    }})
    
  const dispatch = useDispatch()
  const likeHandler=()=>{
    dispatch(likePostByIdPending(postId))
  }
  const unlikeHandler=()=>{
    dispatch(unlikePostByIdPending(postId))
  }
  
  return (
    <div className="like">
      <div className="like__details">
        {hasLiked ? (<p>You and {likes.length-1} people </p>): (<p>{likes.length} people </p>)}
        <i className="fa fa-thumbs-up"></i>
      </div>
      {userId ? (
        <div className="like__btn">
        { hasLiked? (<i className="fa fa-thumbs-up" onClick={()=> unlikeHandler()}></i>): 
        (<i className="far fa-thumbs-up" onClick={()=>likeHandler()}></i>)}
      </div>
      ) : null}
      
    </div>
  )
}

export default Like
