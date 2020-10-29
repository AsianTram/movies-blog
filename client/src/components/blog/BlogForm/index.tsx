import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import './BlogForm.scss';
import { createPost } from '../../../redux/actions';
import { PostType } from '../../../types';

const BlogForm = () => {
  const [type, setType]=useState<PostType>(PostType.movie)
  const [name, setName]=useState('')
  const [picture, setPicture]=useState('')
  const [content, setContent]=useState('')
  const dispatch = useDispatch()

  const submitHandler=()=>{
    console.log(type)
    console.log(name)
    console.log(picture)
    console.log(content)

    // dispatch(createPost({type, name, picture, content}))
  }

  return (
    <div className="blogform">
      <h3>Create a New Review</h3>
      <form>
        <div className="blogform__type">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="movie" checked onClick={()=> setType(PostType.movie)} />
            <label className="form-check-label" htmlFor="movie">
              Movie
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="celebrity" onClick={()=> setType(PostType.celebrity)}/>
            <label className="form-check-label" htmlFor="celebrity">
              Celebrity
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="all" onClick={()=> setType(PostType.all)}/>
            <label className="form-check-label" htmlFor="all">
              All
          </label>
          </div>
        </div>


        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture Link</label>
          <input type="text" className="form-control" id="picture" required onChange={(e)=>{setPicture(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" required onChange={(e)=>{setContent(e.target.value)}}></textarea>
        </div>

        <button type="button" onClick={()=>submitHandler()} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default BlogForm
