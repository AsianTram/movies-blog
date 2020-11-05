import React, { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Comment.scss'
import { CommentObject, User } from '../../../types'
import { commentPost, deleteCommentByIdPending, updateCommentByIdPending } from '../../../redux/actions/posts'

const Comment: React.FC<{ comments: CommentObject[], user: User | null }> = ({ comments, user }) => {
  const [post, setPost] = useState('')
  const [isEdited, setIsEdited] = useState(false)
  const [currentComment, setCurrentComment] = useState<null|CommentObject>(null)

  const { id } = useParams<{id:string}>()
  const dispatch = useDispatch()
  const postComment = () => {
    dispatch(commentPost({ id: id, value: post }))
  }
  const updateAComment=()=>{
    if(currentComment){
      dispatch(updateCommentByIdPending({postId: id, commentId: currentComment._id, value: post}))
    }
}
const deleteAPost=(commentId:string)=>{
  const res=window.confirm('Are you sure to delete this comment?')
  if(res){
    dispatch(deleteCommentByIdPending({postId: id, commentId:commentId}))
  }
}

  return (
    <div className="comment">
      {user ? (
        <div className="comment__post">
          {isEdited ? (
            <Fragment>
              <textarea onChange={(e) => setPost(e.target.value)} defaultValue={currentComment?.value}></textarea>
              <button onClick={() => updateAComment()}>Update</button>
              <button onClick={() => setIsEdited(false)}>Cancel</button>
            </Fragment>) : (
              <Fragment>
                <textarea onChange={(e) => setPost(e.target.value)} defaultValue="" ></textarea>
                <button onClick={() => postComment()}>Post</button>
              </Fragment>
            )}
        </div>
      ) : null}

      {comments.length !== 0 ? (
        comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} user={user} setCurrentComment={setCurrentComment} setIsEdited={setIsEdited} deleteAPost={deleteAPost} />))
      ) : (
          <p>No one yet commented</p>
        )}

    </div>
  )
}

const CommentItem: React.FC<{ comment: CommentObject, user: User | null, setCurrentComment:Dispatch<SetStateAction<CommentObject | null>>, setIsEdited:Dispatch<SetStateAction<boolean>>, deleteAPost:(commentId:string)=>void }> = ({ comment, user, setCurrentComment, setIsEdited, deleteAPost }) => {
  return (
    <div className="comment__box">
      {comment.user === user?._id ? (
        <div className="comment__handlers">
          <i className="fas fa-edit" onClick={()=>{setCurrentComment(comment); setIsEdited(true)}}></i>
          <i className="fas fa-trash" onClick={()=> {deleteAPost(comment._id)}}></i>
        </div>
      ) : null}
      <div className="comment__author">
        {comment.avatar ? (<img src={comment.avatar} alt="user avatar" />) : (<img src="https://via.placeholder.com/60/FF0000/FFFFFF" alt="user avatar" />)}
        <strong>{comment.name}</strong>
      </div>
      <p>{comment.value}</p>
    </div>
  )
}

export default Comment
