import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import './BlogUpdate.scss';
import { updatePost, getPostByIdPending } from '../../../redux/actions/posts';
import { PostType, AppState } from '../../../types';

const BlogUpdate = () => {
  const  currentPost=useSelector((state:AppState)=>state.post.currentPost)
  const [type, setType]=useState<PostType>(PostType.movie)
  const [name, setName]=useState('')
  const [picture, setPicture]=useState('')
  const [content, setContent]=useState('')
  const { id } = useParams()
  const dispatch = useDispatch()


  
  useEffect(() => {
   if(currentPost){
    setType(currentPost.type);
    setName(currentPost.name);
    setPicture(currentPost.picture);
    setContent(currentPost.content);
  }
  else{
    dispatch(getPostByIdPending(id))
  }
  }, [currentPost])
  const submitHandler=()=>{
    console.log(name)
    console.log(type)
    console.log(content)

    dispatch(updatePost({id, type, name, picture, content}))
  }

  return (
    <div className="blogform">
      <h3>Create a New Review</h3>
      <form>
        <div className="blogform__type">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="movie" checked={type===PostType.movie} onClick={()=> setType(PostType.movie)} />
            <label className="form-check-label" htmlFor="movie">
              Movie
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="celebrity" checked={type===PostType.celebrity} onClick={()=> setType(PostType.celebrity)}/>
            <label className="form-check-label" htmlFor="celebrity">
              Celebrity
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="all" checked={type===PostType.all} onClick={()=> setType(PostType.all)}/>
            <label className="form-check-label" htmlFor="all">
              All
          </label>
          </div>
        </div>


        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required defaultValue={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture Link</label>
          <input type="text" className="form-control" id="picture" defaultValue={picture} onChange={(e)=>{setPicture(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" defaultValue={content} required onChange={(e)=>{setContent(e.target.value)}}></textarea>
        </div>

        <button type="button" onClick={()=>submitHandler()} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
 
export default BlogUpdate
